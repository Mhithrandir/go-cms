import { useEffect, useRef, useState } from "react";
import { command, getmenus, gettables } from "../service/api";
import Icon from "../components/icons";
import Editor from '@monaco-editor/react';
import DataGrid from "../components/datagrid";

function Database() {
    const [ tables, setTables ] = useState([]);
    const [ selectedTable, setSelectedTable ] = useState({ Name: "", Command: "", Records: "" });
    
    useEffect(() => {
        gettables().then((result) => {
            console.log(result.Data);
            setTables(result.Data);
            // setMenus(result.Data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);
    const onTableSelected = (t) => {
        command("SELECT * FROM " + t + " LIMIT 100").then((result) => {
            
            let datatable = {
                Columns: Object.keys(result.Data[0]).map((p) => { return { Name: p, Label: p }; }),
                Rows: result.Data,
                ActionButtons: []
            };
            console.log(datatable);

            setSelectedTable({ Name: t, Command: "SELECT * FROM " + t + " LIMIT 100", Records: datatable });
        }).catch((err) => {
            console.error(err);
        });
    }
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
      }
    const executeSql = () => {
        console.log(editorRef.current.getValue());
        command(editorRef.current.getValue()).then((result) => {
            
            let datatable = {
                Columns: Object.keys(result.Data[0]).map((p) => { return { Name: p, Label: p }; }),
                Rows: result.Data,
                ActionButtons: []
            };
            console.log(datatable);

            setSelectedTable({ Name: selectedTable, Command: editorRef.current.getValue(), Records: datatable });
        }).catch((err) => {
            console.error(err);
        });
        
    }

    return (<div>
        <button type="button" className="btn btn-link" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#tables"} aria-controls="tables">
            <Icon Icon={"Expand"} /> Tables
        </button>
        <div className="collapse show" id="tables">
            <div className="container">
                <div className="row">
                    <ul className="list-group col-3">
                        {tables && tables.map((t) => {
                            return <li key={t} 
                                className={ t !== selectedTable.Name ? "list-group-item list-group-item-action" : "list-group-item list-group-item-action active"} 
                                onClick={() => onTableSelected(t)}>{t}</li>
                        })}
                    </ul>
                    <div className="col-9">
                        {selectedTable && <div style={{ overflow: "auto", maxHeight: "89vh" }}>
                            <button className="btn btn-dark" onClick={() => executeSql()}><Icon Icon={"Execute"} /></button>
                            <Editor height="10vh" defaultLanguage="sql" value={selectedTable.Command} onMount={handleEditorDidMount}/>
                            <DataGrid table={selectedTable.Records} />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
  
export default Database;
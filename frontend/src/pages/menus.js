import { useEffect, useRef, useState } from "react";
import { command, getmenus, getroutes, getroutesfiltered, gettables } from "../service/api";
import Icon from "../components/icons";
import Editor from '@monaco-editor/react';
// import grapesjs from 'grapesjs';
// import GjsEditor, { Canvas, Editor } from '@grapesjs/react';
import DataGrid from "../components/datagrid";
import Dialog from "../components/dialog";
import EditMenuItem from "../components/edit-menu-item";

function Menus() {
    const [ menus, setMenus ] = useState([]);
    const [ routes, setRoutes ] = useState([]);
    const [ selectedMenu, setSelectedMenu ] = useState({});
    
    // const [ table, setTable ] = useState({});
    useEffect(() => {
        getmenus().then((result) => {
            let vett = {};
            Object.keys(result.Data).map((m) => {
                vett[m] = getTable(result.Data[m], null);
                vett[m].Rows = vett[m].Rows.map((r) => r.Childrens !== null && r.Childrens.length > 0 ? { ...r, ChildrensTable: getTable(r.Childrens, r) } : r);
            });
            setMenus(vett);
        }).catch((err) => {
            console.error(err);
        });
        getroutesfiltered("Package", "page").then((result) => {
            setRoutes(result);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const getTable = (items, parent) => {
        let table = {
            Columns: [
                { Name: "Childrens", Label: "", Template: (value, key) => { return value !== null ? <td key={key}><Icon Icon={"Expand"} /></td> : <td key={key}></td> } },
                { Name: "MenuName", Label: "MenuName" },
                { Name: "Name", Label: "Name" },
                { Name: "Route", Label: "Path", Template: (value, key) => { return <td key={key}>{value.Path}</td> } }
            ],
            Rows: items,
            ActionButtons: [
                { className: "btn btn-light", ModalId: "#edit-modal", Label: "Edit" },
                { className: "btn btn-danger", ModalId: "#delete-modal", Label: "Delete" }
            ],
            selectedRow: (row) => {
                table.Rows = table.Rows.map((r) => r.ID === row.ID ? { ...r, className: "row-selected" } : { ...r, className: "" });
                if(parent === null) {
                    setMenus({ ... menus, name: table });
                    setSelectedMenu(row);
                }
                else {
                    // setMenus({ ... menus, name: { ...parent, } });
                    // console.log(menus);
                    // console.log(selectedMenu);
                    // console.log(menus[name]);
                    
                    // dovrebbe funzionare e invece
                    // let name = row.MenuName;
                    // setMenus({ ... menus, name: { ... menus[name], Rows: menus[name].Rows.map((r) => r.ID === parent.ID ? { ... r, ChildrensTable : table } : r ) } });

                    //funzionano
                    // console.log(row);
                    // console.log(parent);
                }
            }
        };
        items[0].Route.Permissions.map((p) => {
            table.Columns.push({ Name: "Route", Label: p.UserType.Description, Template: (value) => { let val = value.Permissions.filter((perm) => perm.UserType.Description === p.UserType.Description)[0]; return <td key={p.UserType.Description}>{val.Enabled && <Icon Icon={'Check'} />}</td> } })
        });
        return table;
    }

    const onAdd = () => {

    }

    const onSave = () => {

    }

    const deleteSelected = () => {

    }

    const OnMenuEditChanges = () => {

    }

    return (<div>
        {menus && Object.keys(menus).map((m) => {
            return <div key={m}>
                <button type="button" className="btn btn-link" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#" + m} aria-controls={m}>
                    <Icon Icon={"Expand"} /> {menus[m].Rows[0].MenuName}
                </button>
                <div className="collapse show" id={m} style={{ marginLeft: '30px' }}>
                    <DataGrid table={menus[m]} />
                    <hr/>
                    {selectedMenu && selectedMenu.Childrens != null && selectedMenu.Childrens.length > 0 && <><h4>Childrens</h4><DataGrid table={selectedMenu.ChildrensTable} /></> }
                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-modal" onClick={onAdd}>Add</button>
                </div>
            </div>
        })}
        <Dialog title={'Add Menu item'} id="add-modal" isForm={true} submit={(formData) => onSave(formData, false)}>
            <EditMenuItem menu={selectedMenu} routes={routes} OnMenuEditChanges={(val) => { setSelectedMenu(val); }}/>
        </Dialog>
        <Dialog title={'Edit Menu item'} id="edit-modal" isForm={true} submit={(formData) => onSave(formData, true)}>
            <EditMenuItem menu={selectedMenu} routes={routes} OnMenuEditChanges={(val) => { console.log(val); setSelectedMenu(val); }}/>
        </Dialog>
        <Dialog title={'Delete Menu item'} id="delete-modal" isForm={true} saveText={'Delete'} submit={deleteSelected}>
            asdasdasdd
            {/* <p>Are you sure you want to delete this items? this operation cannot be undone</p> */}
        </Dialog>
    </div>);
}
  
export default Menus;
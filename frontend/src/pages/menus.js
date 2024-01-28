import { useEffect, useRef, useState } from "react";
import { command, getmenus, gettables } from "../service/api";
import Icon from "../components/icons";
import Editor from '@monaco-editor/react';
// import grapesjs from 'grapesjs';
// import GjsEditor, { Canvas, Editor } from '@grapesjs/react';
import DataGrid from "../components/datagrid";

function Menus() {
    const [ menus, setMenus ] = useState([]);
    
    // const [ table, setTable ] = useState({});
    useEffect(() => {
        getmenus().then((result) => {
            console.log(result.Data);
            setMenus(result.Data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    return (<div>
        work in progress...
    </div>);
}
  
export default Menus;
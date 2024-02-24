import { useEffect, useState } from "react";
import DataGrid from "../components/datagrid";
import Dialog from "../components/dialog";
import FormControl from "../components/form-control";
import { addusertype, getusertypes } from "../service/api";

function UserTypes() {
    const [ usertypes, setUsertypes ] = useState([]);
    const [ selectedUsertype, setSelectedUsertype ] = useState([]);
    const [ datatable, setDataTable ] = useState({});
    const [ dialog, setDialog ] = useState("");

    useEffect(() => {
        getusertypes(0).then((result) => {
            setUsertypes(result.Data);

            let datatable = {
                Columns: [
                    { Name: "Description", Label: "Description" }
                ],
                Rows: result.Data,
                ActionButtons: [
                    { className: "btn btn-danger", Label: "Delete", onClick: (e) => { setDialog("delete"); } }
                ],
                selectedRow: (row) => {
                    datatable.Rows = datatable.Rows.map((r) => r.ID === row.ID ? { ...r, className: "row-selected" } : { ...r, className: "" });
                    setDataTable(datatable);
                    setSelectedUsertype(row);
                }
            };
            setDataTable(datatable);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const onSave = (e) => {
        console.log("e.checkValidity()");
        e.preventDefault();
        console.log(e.target.checkValidity());
        // addusertype()
    }
    return (<>
            <h1>Configuration Usertypes</h1>
            <DataGrid table={datatable} />
            <button type="button" className="btn btn-light" onClick={(e) => { setDialog("add")}}>Add</button>
            <Dialog title={'Add user type'} show={ dialog === "add" } id="add-modal" isForm={true} submit={(formData) => onSave(formData)} CloseDialog={() => setDialog("")}>
                <FormControl
                    // onChange={(val) => props.OnRouteEditChanges({...props.route, Package: val.target.value })}
                    type="text"
                    id="description"
                    name="description"
                    required
                    label={'User type'}/>
            </Dialog>
            <Dialog title={'Delete user'} show={ dialog === "delete" } saveText={'Delete'} CloseDialog={() => setDialog("")}>
                <p>Are you sure you want to delete this items? this operation cannot be undone</p>
            </Dialog>
        </>)
}

export default UserTypes;
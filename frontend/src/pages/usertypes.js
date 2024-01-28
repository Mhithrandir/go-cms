import { useEffect, useState } from "react";
import DataGrid from "../components/datagrid";
import Dialog from "../components/dialog";
import FormControl from "../components/form-control";
import { getusertypes } from "../service/api";

function UserTypes() {
    const [ usertypes, setUsertypes ] = useState([]);
    const [ datatable, setDataTable ] = useState({});
    useEffect(() => {
        getusertypes(0).then((result) => {
            console.log(result);
            setUsertypes(result.Data);

            let datatable = {
                Columns: [
                    { Name: "Description", Label: "Description" }
                ],
                Rows: result.Data,
                ActionButtons: [
                    { className: "btn btn-danger", ModalId: "#delete-modal", Label: "Delete" }
                ]
            };
            setDataTable(datatable);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const onAdd = () => {

    }

    const onSave = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (<>
            <h1>Configuration Usertypes</h1>
            <DataGrid table={datatable} />
            <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-modal" onClick={onAdd}>Add</button>
            <Dialog title={'Add user type'} id="add-modal" isForm={true} submit={onSave}>
                <FormControl
                    // onChange={(val) => props.OnRouteEditChanges({...props.route, Package: val.target.value })}
                    type="text"
                    id="description"
                    name="description"
                    required
                    label={'User type'}/>
            </Dialog>
            <Dialog title={'Delete user'} id="delete-modal" saveText={'Delete'}>
                <p>Are you sure you want to delete this items? this operation cannot be undone</p>
            </Dialog>
        </>)
}

export default UserTypes;
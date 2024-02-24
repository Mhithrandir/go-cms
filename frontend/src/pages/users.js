import { useEffect, useState } from "react";
import DataGrid from "../components/datagrid";
import Dialog from "../components/dialog";
import FormControl from "../components/form-control";
import Icon from "../components/icons";
import { getusers } from "../service/api";

function Users() {
    const [ users, setUsers ] = useState([]);
    const [ datatable, setDataTable ] = useState({});
    const [ dialog, setDialog ] = useState("");

    useEffect(() => {
        getusers(0).then((result) => {
            console.log(result);
            setUsers(result.Data);

            let datatable = {
                Columns: [
                    { Name: "Username", Label: "Username" },
                    { Name: "LastLogin", Label: "Last login", Template: (value, key) => { return <td key={key}>{value.DatabaseValue}</td> } },
                    { Name: "DatePassword", Label: "Date password", Template: (value, key) => { return <td key={key}>{value.DatabaseValue}</td> } },
                    { Name: "PasswordDuration", Label: "Password duration", Template: (value, key) => { return <td key={key}>{value === -1 ? <span style={{ fontStyle: 'italic' }}>forever</span> : value + ' days'}</td> } },
                    { Name: "CodeResetPassword", Label: "Code reset password", Template: (value, key) => { return <td key={key}>{value.String}</td> } },
                    { Name: "IsPasswordExpired", Label: "Is password expired", Template: (value, key) => { return <td key={key}>{value ? <Icon Icon={'Check'} /> : ''}</td> } },
                    { Name: "UserType", Label: "User type", Template: (value, key) => { return <td key={key}>{value.Description}</td> } },
                ],
                Rows: result.Data,
                ActionButtons: [
                    { className: "btn btn-light", Label: "Edit", onClick: (e) => { setDialog("edit"); } },
                    { className: "btn btn-light", Label: "Reset password", onClick: (e) => { setDialog("reset-password"); } },
                    { className: "btn btn-danger", Label: "Delete", onClick: (e) => { setDialog("delete"); } }
                ]
            };
            setDataTable(datatable);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const onSave = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (<>
            <h1>Configuration Users</h1>
            <DataGrid table={datatable} />
            <Dialog title={'Edit user'} isForm={true} submit={onSave} show={ dialog === "edit" } CloseDialog={() => setDialog("")}>
                <FormControl
                    // onChange={(val) => props.OnRouteEditChanges({...props.route, Method: val.target.value })}
                    type="select"
                    options={['GET', 'POST', 'PUT', 'DELETE', 'PAGE']}
                    id="permission"
                    name="permission"
                    required
                    label={'Permission'}/>
            </Dialog>
            <Dialog title={'Reset password'} show={ dialog === "reset-password" } id="reset-modal" saveText={'Reset'} CloseDialog={() => setDialog("")}>
                <p>Are you sure you want to reset the password? It will be send a mail to the user with a link for resetting the password</p>
            </Dialog>
            <Dialog title={'Delete user'} show={ dialog === "delete" } id="delete-modal" saveText={'Delete'} CloseDialog={() => setDialog("")}>
                <p>Are you sure you want to delete this items? this operation cannot be undone</p>
            </Dialog>
        </>)
}

export default Users;
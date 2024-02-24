import { useEffect, useState } from "react";
import DataGrid from "../components/datagrid";
import Dialog from "../components/dialog";
import EditRoute from "../components/edit-route";
import Icon from "../components/icons";
import { addroute, deleteroute, getroutes, updateroute } from "../service/api";

function Routes() {
    const [ pkges, setPkges ] = useState([]);
    const [ routes, setRoutes ] = useState([]);
    const [ permissions, setPermissions ] = useState([]);
    const [ datatables, setDataTables ] = useState({});
    const [ dialog, setDialog ] = useState("");
    const [ selectedRoute, setSelectedRoute ] = useState({
        Package: '',
        Func: '',
        Type: '',
        Method: '',
        Permissions: []
    });

    useEffect(() => {
        load();
    }, []);

    const load = () => {
        getroutes(0).then((result) => {
            let pkg = [];
            let rs = [];
            let p = [];
            let _datatables = {};
            result.Data.map((r) => {
                p = [];
                if(!pkg.some((p) => p === r.Package)) {
                    pkg.push(r.Package);
                    rs[r.Package] = result.Data.filter((t) => t.Package === r.Package);
                    _datatables[r.Package] = {
                        Columns: [
                            { Name: "Package", Label: "Package" },
                            { Name: "Func", Label: "Func" },
                            { Name: "Type", Label: "Type" },
                            { Name: "Method", Label: "Method" },
                            { Name: "Path", Label: "Path" },
                        ],
                        Rows: result.Data.filter((f) => f.Package === r.Package),
                        ActionButtons: [
                            { className: "btn btn-light", Label: "Edit", onClick: (e) => { setSelectedRoute(e); setDialog("edit"); } },
                            { className: "btn btn-danger", Label: "Delete", onClick: (e) => { setSelectedRoute(e); setDialog("delete"); } }
                        ],
                        selectedRow: (row) => {
                            let dt = {};
                            Object.keys(_datatables).forEach((k) => {
                                if(k === row.Package) {
                                    _datatables[k].Rows = _datatables[k].Rows.map((r) => r.ID === row.ID ? { ...r, className: "row-selected" } : { ...r, className: "" });
                                }
                                else {
                                    _datatables[k].Rows = _datatables[k].Rows.map((r) => r.ID === row.ID ? { ...r, className: "" } : { ...r, className: "" });
                                }
                                dt[k] = _datatables[k];
                            });
                            setDataTables(dt);
                        }
                    };
                }
                r.Permissions.forEach((perm) => {
                    p.push(perm.UserType.Description);
                })
                return null;
            });
            
            pkg.forEach((_p) => {
                p.map((perm) => {
                    _datatables[_p].Columns.push({ Name: "Permissions", Label: perm, Template: (value) => {
                        let permission = value.filter((temp) => {
                            return temp.UserType.Description === perm
                        });
                        return <td key={permission[0].ID}>{permission[0].Enabled && <Icon Icon={'Check'} />}</td> } });
                    return null;
                })
            });

            setDataTables(_datatables);

            setPkges(pkg);
            setRoutes(rs);
            setPermissions(p);

        }).catch((err) => {
            console.error(err);
        });
    }
    const onAdd = (e) => {
        let selRoute = {
            Package: e,
            Func: '',
            Type: '',
            Method: '',
            Permissions: []
        };

        permissions.forEach((p) => {
            selRoute.Permissions.push({
                Enabled: false,
                IDUserType: p.ID,
                UserType: {
                    Description: p
                }
            })
        });
        setSelectedRoute(selRoute);
        setDialog("add");
    }

    const onSave = (e, isEdit) => {
        e.preventDefault();

        if(isEdit) {
            updateroute(selectedRoute).then((result) => {
                setDialog("");
                if(result.Data) {
                    load();
                }
            }).catch((err) => {
                console.error(err);
            });
        }
        else {
            addroute(selectedRoute).then((result) => {
                setDialog("");
                if(result.Data) {
                    load();
                }
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    const deleteSelected = (e) => {
        e.preventDefault();
        deleteroute(selectedRoute).then((result) => {
            setDialog("");
            if(result.Data) {
                load();
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    return (<>
            <h1>Configuration Routes</h1>
            <p>Important notice!!<br/>
            Each route in this table represent a url or a api handled by the webserver!if a route is not present here the webserver will respond with 404<br/>
            Here are the fields and their explanation:<br/>
            <ul>
                <li>Package: the package that handled the response</li>
                <li>Func: the specifc func that handled the response</li>
                <li>
                    Type:
                    <ul>
                        <li>Api: a web api that response only whit a JSON</li>
                        <li>Page: a non callable route mapped here only for check the user permissions</li>
                    </ul>
                </li>
                <li>Method: the specif HTTP (GET, POST, PUT, DELETE) method to call the webserver (PAGE is an option to use only if you are creating a "page")</li>
                <li>Path: automatic fields that represent the "url" to use in the react code</li>
                <li>***UserType***: fields after Path is automatically generated to configure the permission for each usertype<br/>
                when you edit or add a new Route you can set wich UserType has permission to call\open</li>
            </ul>
            the Route "/fake***" is necessaryly for having a menù with expander<br/></p>
            {pkges && pkges.map((p) => {
                return <div key={p}>
                    <button type="button" className="btn btn-link" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#" + p} aria-controls={p}>
                        <Icon Icon={"Expand"} /> {p}
                    </button>
                    <div className="collapse show" id={p}>
                        <div className="ps-4 mt-2">
                            <DataGrid key={p} table={datatables[p]} />
                            {/* <table className="table table-bordered align-middle table-hover table-striped">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Package</th>
                                        <th scope="col">Func</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Method</th>
                                        <th scope="col">Path</th>
                                        {permissions.map((p) => {
                                            return <th key={p}>{p}</th>
                                        })}
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {routes[p].map((r, index) => {
                                        return <tr key={r.ID}>
                                            <td>{r.Package}</td>
                                            <td>{r.Func}</td>
                                            <td>{r.Type}</td>
                                            <td>{r.Method}</td>
                                            <td>{r.Path}</td>
                                            {routes[p][index].Permissions.map((p) => {
                                                return <td key={p.ID}>{p.Enabled && <Icon Icon={'Check'} />}</td>
                                            })}
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button style={{ minWidth: '60px' }} type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#edit-modal" onClick={() => onEdit(r)}>Edit</button>
                                                    <button style={{ minWidth: '60px' }} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-modal" onClick={() => onDelete(r)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table> */}
                            <button type="button" className="btn btn-light" onClick={() => onAdd(p)}>Add</button>
                        </div>
                    </div>
                </div> })
            }
            <Dialog title={'Add route'} show={ dialog === "add" } id="add-modal" isForm={true} submit={(formData) => onSave(formData, false)} CloseDialog={() => setDialog("")}>
                <EditRoute permissions={permissions} route={selectedRoute} OnRouteEditChanges={(val) => { setSelectedRoute(val); }}/>
            </Dialog>
            <Dialog title={'Edit Route'} show={ dialog === "edit" } id="edit-modal" isForm={true} submit={(formData) => onSave(formData, true)} CloseDialog={() => setDialog("")}>
                <EditRoute permissions={permissions} route={selectedRoute} OnRouteEditChanges={(val) => { setSelectedRoute(val); }}/>
            </Dialog>
            <Dialog title={'Delete route'} show={ dialog === "delete" } id="delete-modal" isForm={true} saveText={'Delete'} submit={deleteSelected} CloseDialog={() => setDialog("")}>
                <p>Are you sure you want to delete this items? this operation cannot be undone</p>
            </Dialog>
            <button type="button" className="btn btn-light mt-1" onClick={() => onAdd("")}>Add</button>
        </>)
}

export default Routes;
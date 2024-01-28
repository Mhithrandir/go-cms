import FormControl from "./form-control";

function EditRoute(props) {
    const isChecked = (description) => {
        let perm = props.route.Permissions.find((perm) => perm.UserType.Description === description);
        return perm !== undefined ? perm.Enabled : false;
    }

    return(props.route !== undefined && 
        <>
            <FormControl
                onChange={(val) => props.OnRouteEditChanges({...props.route, Package: val.target.value })}
                type="text"
                id="package"
                name="package"
                required
                label={'Package'}
                value={ props.route.Package !== undefined ? props.route.Package : '' }/>
            <FormControl
                onChange={(val) => props.OnRouteEditChanges({...props.route, Func: val.target.value })}
                type="text"
                id="func"
                name="func"
                required
                label={'Func'}
                value={ props.route.Func !== undefined ? props.route.Func : '' }/>
            <FormControl
                onChange={(val) => props.OnRouteEditChanges({...props.route, Type: val.target.value })}
                type="select"
                options={['Api', 'Page']}
                id="type"
                name="type"
                required
                label={'Type'}
                value={ props.route.Type !== undefined ? props.route.Type : '' }/>
            <FormControl
                onChange={(val) => props.OnRouteEditChanges({...props.route, Method: val.target.value })}
                type="select"
                options={['GET', 'POST', 'PUT', 'DELETE', 'PAGE']}
                id="method"
                name="method"
                required
                label={'Method'}
                value={ props.route.Method !== undefined ? props.route.Method : '' }/>
            <p>Permissions</p>
            {props.permissions.map((p) => {
                return <FormControl
                    key={p}
                    type="switch"
                    id={p}
                    name={p}
                    label={p}
                    checked={ isChecked(p) }
                    onChange={(val) => {
                            // console.log(val.target.checked);
                            // console.log(p);
                            // // console.log(props.route.Permissions.find((perm) => perm.UserType.Description === p).Enabled);
                            // let temp = { ...props.route, Permissions: props.route.Permissions.map((v) => v.UserType.Description === p ? { ...v, Enabled: val.target.checked } : v) };
                            // console.log(temp);
                            props.OnRouteEditChanges({ ...props.route, Permissions: props.route.Permissions.map((v) => v.UserType.Description === p ? { ...v, Enabled: val.target.checked } : v) })
                        }
                    }/>
            })}
            {/* <FormControl onChange={(val) => setRoute({...route, Package: val.target.value })} type="text" id="package" name="package" required label={'Package'} value={route.Package}/>
            <FormControl onChange={(val) => setRoute({...route, Func: val.target.value })} type="text" id="func" name="func" required label={'Func'} value={route.Func}/>
            <FormControl onChange={(val) => setRoute({...route, Type: val.target.value })} type="select" options={['Api', 'Page']} id="type" name="type" required label={'Type'} value={route.Type}/>
            <FormControl onChange={(val) => setRoute({...route, Method: val.target.value })} type="select" options={['GET', 'POST', 'PUT', 'DELETE']} id="method" name="method" required label={'Method'} value={route.Method}/>
            <p>Permissions</p>
            {props.permissions.map((p) => {
                return <FormControl key={p} type="switch" id={p} name={p} label={p} checked={route.Permissions[p]} onChange={(val) => permissionChanged(val, p)}/>
            })} */}
        </>
    );
}

export default EditRoute;
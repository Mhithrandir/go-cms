import FormControl from "./form-control";

function EditMenuItem(props) {

    return(props.menu !== undefined && 
        <>
            <FormControl
                onChange={(val) => props.OnMenuEditChanges({...props.menu, MenuName: val.target.value })}
                type="text"
                id="menuname"
                name="menuname"
                required
                label={'MenuName'}
                value={ props.menu.MenuName !== undefined ? props.menu.MenuName : '' }/>
            <FormControl
                onChange={(val) => props.OnMenuEditChanges({...props.menu, Name: val.target.value })}
                type="text"
                id="name"
                name="name"
                required
                label={'Name'}
                value={ props.menu.Name !== undefined ? props.menu.Name : '' }/>
            <FormControl
                onChange={(val) => props.OnMenuEditChanges({...props.menu, Route: val.target.value })}
                type="select"
                options={props.routes.map((r) => { return { Key: r.ID, Value: r.Path } })}
                id="route"
                name="route"
                required
                label={'Route'}
                value={ props.menu.Route !== undefined ? props.menu.Route.ID : -1 }/>
            <FormControl
                onChange={(val) => props.OnMenuEditChanges({...props.menu, Parent: val.target.value })}
                type="select"
                options={['Api', 'Page']}
                id="parent"
                name="parent"
                required
                label={'Parent'}
                value={ props.menu.Parent !== undefined ? props.menu.Parent : -1 }/>
            <FormControl
                onChange={(val) => props.OnMenuEditChanges({...props.menu, MenuOrder: val.target.value })}
                type="number"
                id="menuorder"
                name="menuorder"
                required
                label={'Order'}
                value={ props.menu.MenuOrder !== undefined ? props.menu.MenuOrder : -1 }/>
        </>
    );
}

export default EditMenuItem;
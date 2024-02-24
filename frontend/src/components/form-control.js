import { useState } from "react";
import Icon from "./icons";

function FormControl(props) {
    const [ passwordVisibile, setPasswordVisibile ] = useState(false);
    const [ errors, setErrors ] = useState({ errorMessage: [] });

    const togglePassword = () => {
        setPasswordVisibile(!passwordVisibile);
    }

    const OnChange = (e) => {
        // console.log(e.target.type);
        // console.log(e.target.value);
        if(props.validation === false) return;
        let errorMessage = [];
        switch(e.target.type) {
            case "password": 
                // /\d/, /[A-Z]/, /[a-z]/, 8

                if(e.target.value !== "" && !e.target.value.match(/\d/g)) {
                    errorMessage.push("Insert at least one number");
                }
                if(e.target.value !== "" && !e.target.value.match(/[A-Z]/g)) {
                    errorMessage.push("Insert at least one uppercase character");
                }
                if(e.target.value !== "" && !e.target.value.match(/[a-z]/g)) {
                    errorMessage.push("Insert at least one lowercase character");
                }
                if(e.target.value !== "" && e.target.value.length < 8) {
                    errorMessage.push("The password must be at least 8 characters length");
                }
                setErrors({ errorMessage: errorMessage });
                break;
            case "email":
                if(e.target.value !== "" && !e.target.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                    errorMessage.push("Not a valid email");
                }
                setErrors({ errorMessage: errorMessage });
                break;
            default: break;
        }
        if(props.onChange !== undefined) {
            props.onChange(e.target.value);
        }
    }

    const getControl = () => {
        switch(props.type) {
            case "password":
                return (<div className="form-floating mb-3" style={{ display: 'grid', gridTemplateColumns: '1fr 50px' }}>
                    <input onChange={OnChange} {...props} type={props.type && !passwordVisibile ? props.type : 'text' } className={`form-control ${errors.errorMessage.length > 0 ? 'is-invalid' : 'is-valid'}`} />
                    <label style={{ width: '100%' }} className="form-label" htmlFor={props.id}>{props.label}</label>
                    <div style={{ width: '100%', margin: 'auto' }} className="p-1">
                        <input type="checkbox" className="btn-check" id="example-checkbox-9" autoComplete="off" checked={passwordVisibile} onChange={togglePassword}/>
                        <label style={{ width: '100%' }} className="btn btn-outline-primary" htmlFor="example-checkbox-9">
                            {passwordVisibile && <Icon Icon={'EyeOpen'}/>}
                            {!passwordVisibile && <Icon Icon={'EyeClosed'}/>}
                        </label>
                    </div>

                    { errors.errorMessage.length > 0 &&
                        <div className="invalid-feedback">{errors.errorMessage.map((message) => {
                            return <div key={message}>{message}</div>
                        })}</div>
                    }
                </div>);
            case "select":
                return (<div className="mb-3">
                    <label htmlFor="example-select-1" className="form-label me-1">{props.label}</label>
                    <select className="form-select" id="example-select-1" { ...props }>
                        <option></option>
                        {props.options.map((o) => {
                            return typeof o === "object" ? <option key={o.Key} value={o.Key}>{o.Value}</option> : <option key={o} value={o}>{o}</option>;
                        })}
                    </select>
                </div>);
            case "switch":
                return (<div className="form-check form-switch form-check-inline">
                    <input className={`form-check-input ${errors.errorMessage.length > 0 ? 'is-invalid' : 'is-valid'}`} { ...props } type="checkbox" role="switch" />
                    <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
                </div>);
            case "number":
                return (<div className="form-floating mb-3">
                    <input onChange={OnChange} type="number" className={`form-control ${errors.errorMessage.length > 0 ? 'is-invalid' : 'is-valid'}`} { ...props } />
                    <label className="form-label" htmlFor={props.id}>{props.label}</label>
                </div>);
            case "image":
                return (<div className="form-floating mb-3">
                    <label className="form-label" htmlFor={props.id}>{props.label}</label>
                    <input onChange={OnChange} type="file" className={`form-control ${errors.errorMessage.length > 0 ? 'is-invalid' : 'is-valid'}`} { ...props } />
                </div>);
            default:
                return (<div className="form-floating mb-3">
                    <input onChange={OnChange} className={`form-control ${errors.errorMessage.length > 0 ? 'is-invalid' : 'is-valid'}`} { ...props } />
                    <label className="form-label" htmlFor={props.id}>{props.label}</label>
                </div>);
        }
    }

    return (getControl());
}

export default FormControl;
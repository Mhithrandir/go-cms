import { redirect } from "react-router-dom";
import FormControl from "../components/form-control";
import Icon from "../components/icons";
import { login } from '../service/api';

function Login() {
    const submitFunction = (e) => {
        e.preventDefault();

        login(e.target[0].value, e.target[1].value).then((result) => {
            console.log(result);
            if(result) {
                window.location.href = '/';
            }
            else {
                // print error
                console.log(result.status);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <form onSubmit={submitFunction}>
            <h1>Login</h1>
            <FormControl name="username" required type="email" id="username" placeholder="Email address" label="Email address" />
            <FormControl name="password" required type="password" id="password" placeholder="Password" label="Password" validation={false} />
            <div className="d-flex align-items-rigth">
                <button type="submit" className="btn btn-primary ms-auto" style={{ whiteSpace: 'nowrap', minWidth: '82px' }}><Icon Icon={'Login'} />Log in</button>
            </div>
            <div className="text-center text-body-secondary">
                Don't have an account? <a href="/register">Register</a>
            </div>
      </form>);
}

export default Login;
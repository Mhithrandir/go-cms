import Icon from "../components/icons";

function Register() {
    return (
        <form>
            <h1>Register</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" required placeholder="Email address" />
                <label className="form-label" htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" required placeholder="Password" />
                <label className="form-label" htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password2" required placeholder="Password" />
                <label className="form-label" htmlFor="password2">Confirm Password</label>
            </div>
            <div className="d-flex align-items-rigth">
                <button type="submit" className="btn btn-primary ms-auto" style={{ whiteSpace: 'nowrap', minWidth: '93px' }}><Icon Icon={'Register'} />Register</button>
            </div>
            <div className="text-center text-body-secondary">
                Already have an account? <a href="/login">Login</a>
            </div>
      </form>);
}

export default Register;
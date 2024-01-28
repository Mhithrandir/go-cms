import Icon from "./icons";
import { NavLink } from "react-router-dom";

function MainHeader({ title }) {
    return (
        <div className="row text-bg-dark" style={{ lineHeight: '48px' }}>
          <div className="col-1">
            <button type="button" className="btn btn-secondary" style={{ minWidth: '45px' }} data-bs-toggle="offcanvas" data-bs-target="#example-offcanvas-1">
              <Icon Icon={'Menu'}/>
            </button>
          </div>
          <div className="col">
            <h1>{ title }</h1>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-secondary" style={{ minWidth: '45px' }}>
              <NavLink to="/login" className="list-group-item"><Icon Icon={'User'} /></NavLink>
            </button>
          </div>
        </div>);
}

export default MainHeader;
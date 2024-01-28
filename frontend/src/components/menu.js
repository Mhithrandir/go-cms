import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getmenu } from '../service/api';
import Icon from "./icons";

function Menu({ menuName }) {
    // const userlogged = isUserLogged();
    const [ menu, setMenu ] = useState([]);
    useEffect(() => {
        getmenu(menuName).then((result) => {
            setMenu(result.Data);
        }).catch((err) => {
            console.error(err);
        });
    }, [menuName]);

    return (<ul className="list-group">
        <div className="accordion">
            {menu && menu.map((m) => {
                if(m.Childrens === null || m.Childrens.lenght === 0) {
                    return <NavLink key={m.ID} to={m.Route.Path} className="list-group-item menu-item"><Icon Icon={m.Icon} />{m.Name}</NavLink>
                }
                else {
                    return <div key={m.ID} className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={'#collapse-' + m.ID}
                            aria-expanded="true"
                            aria-controls={'collapse-' + m.ID}>
                            <Icon Icon={m.Icon} />{m.Name}
                        </button>
                    </h2>
                    <div id={'collapse-' + m.ID} className="accordion-collapse collapse show" data-bs-parent="#accordion-example-1">
                        <div className="accordion-body">
                            <ul className="list-group">
                                {m.Childrens.map((c) => {
                                    return <NavLink key={c.ID} to={c.Route.Path} className="list-group-item menu-item"><Icon Icon={c.Icon} />{c.Name}</NavLink>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                }
            })}
        </div>

        {/* <NavLink to="/" className="list-group-item menu-item"><Icon Icon={'Home'} />Home</NavLink>
        {!userlogged && <NavLink to="/login" className="list-group-item menu-item"><Icon Icon={'Login'} />Login</NavLink>}
        {!userlogged && <NavLink to="/register" className="list-group-item menu-item"><Icon Icon={'Register'} />Register</NavLink>}
        {userlogged && <div className="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1-1"
                        aria-expanded="true"
                        aria-controls="collapse-1-1">
                        <Icon Icon={'Configuration'} />Configuration
                    </button>
                </h2>
                <div id="collapse-1-1" className="accordion-collapse collapse show" data-bs-parent="#accordion-example-1">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <NavLink to="/routes" className="list-group-item menu-item"><Icon Icon={'Route'} />Routes</NavLink>
                            <NavLink to="/users" className="list-group-item menu-item"><Icon Icon={'User'} />Users</NavLink>
                            <NavLink to="/usertypes" className="list-group-item menu-item"><Icon Icon={'Usertypes'} />Usertypes</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1-2"
                        aria-expanded="true"
                        aria-controls="collapse-1-2">
                        <Icon Icon={'Land'} />My lands
                    </button>
                </h2>
                <div id="collapse-1-2" className="accordion-collapse collapse show" data-bs-parent="#accordion-example-1">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <NavLink to="/routes" className="list-group-item menu-item"><Icon Icon={'Add'} />Create land</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1-3"
                        aria-expanded="true"
                        aria-controls="collapse-1-3">
                        <Icon Icon={'Forum'} />Social
                    </button>
                </h2>
                <div id="collapse-1-3" className="accordion-collapse collapse show" data-bs-parent="#accordion-example-1">
                    <div className="accordion-body">
                        <ul className="list-group">
                            <NavLink to="/forum" className="list-group-item menu-item"><Icon Icon={'Forum'} />Support forum</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>} 
        {userlogged && <button to="/logout" onClick={() => logout()} className="list-group-item menu-item"><Icon Icon={'Logout'} />Logout</button>}*/}
    </ul>);
}

export default Menu;
import MainHeader from "../components/main-header";
import { Outlet } from "react-router-dom";
import Menu from "../components/menu";
import { DndProvider, useDrop } from 'react-dnd';

function Layout() {

  return (<>
      <div className="App">
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="example-offcanvas-1" aria-labelledby="offcanvas-title-1">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvas-title-1">Welcome Guest!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Menu menuName={"MainMenu"}/>
          </div>
        </div>
        <div className="container">
          <MainHeader title={'Land configurator'} />
        </div>
      </div>
      <div className="container" id="container-main">
        <Outlet />
      </div>
  </>);
}

export default Layout;
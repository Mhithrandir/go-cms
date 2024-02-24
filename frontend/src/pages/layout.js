import MainHeader from "../components/main-header";
import { Outlet } from "react-router-dom";
import Menu from "../components/menu";
import { DndProvider, useDrop } from 'react-dnd';
import OffCanvas from "../components/off-canvas";
import { useState } from "react";

function Layout() {
  const [ menuVisible, setMenuVisible ] = useState(false);
  return (<>
      <div className="App">
        {/* <div className="offcanvas offcanvas-start" tabIndex="-1" id="example-offcanvas-1" aria-labelledby="offcanvas-title-1">
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
          <div className="container" id="container-main">
            <Outlet />
          </div>
        </div> */}
        <OffCanvas menuVisible={menuVisible} onClose={ () => setMenuVisible(false) }>
          <MainHeader title={'Land configurator'} openMenu={ () => setMenuVisible(true) }/>
          <div className="container" id="container-main">
            <Outlet />
          </div>
        </OffCanvas>
      </div>
  </>);
}

export default Layout;
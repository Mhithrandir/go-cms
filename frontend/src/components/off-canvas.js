import Menu from "./menu";

function OffCanvas(props) {
    return (<div className="off-canvas">
        <div className="container">
            {props.children}
        </div>
        {props.menuVisible && <>
            <div className="tendina"/>
            <div className="off-canvas-body" tabIndex="-1">
                <header className="off-canvas-header">
                    <h5 className="title" id="offcanvas-title-1">Welcome Guest!</h5>
                    <button type="button" className="btn-close" onClick={() => props.onClose()} aria-label="Close"></button>
                </header>
                <div>
                    <Menu onClick={() => props.onClose()} menuName={"MainMenu"}/>
                </div>
            </div>
        </>}
    </div>);
}

export default OffCanvas;
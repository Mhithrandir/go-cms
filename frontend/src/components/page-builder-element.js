import { useState } from "react";
import Dialog from "./dialog";
import FormControl from "./form-control";
import Icon from "./icons";

function PageBuilderElement(props) {
    const [ dialog, setDialog ] = useState("");
    const [ onhover, setOnhover ] = useState(false);
    const [ element, setElement ] = useState(props.element ? props.element : {
        Type: "body",
        Id: "elem-body",
        Value: "",
        Childrens: []
    });

    const getNewElement = (type) => {
        return {
            Type: type,
            Id: "elem-" + element.Childrens.length.toString(),
            Value: type === 'image' ? 'https://placehold.co/200' : '',
            Childrens: []
        }
    }

    const onMenuItemClicked = (type) => {
        console.log(getNewElement(type));
        setElement({ ...element, Childrens: [ ...element.Childrens, getNewElement(type) ] });
        setDialog("");
    }

    const onDeleted = (el) => {
        // console.log(element.Childrens);
        // console.log(element.Childrens.filter((c) => c.Id !== el.Id ));
        setElement({ ...element, Childrens: element.Childrens.filter((c) => c.Id !== el.Id ) });
    }
    
    return (<div className="page-builder-element">
        <div className="page-builder-element-body" onMouseOver={() => setOnhover(true)} onMouseOut={() => setOnhover(false)}>
            <div className="page-builder-element-type">{element.Type}</div>
            { element.Type === "body" && <div style={{ marginTop: '20px' }}>{ element.Childrens.map((c) => <PageBuilderElement key={element.Id} element={c} onDeleted={(el) => onDeleted(el)} />) }</div> }
            { element.Type === "title" && <h1 contentEditable={true} suppressContentEditableWarning={true}>Insert title...</h1> }
            { element.Type === "paragraph" && <p contentEditable={true} suppressContentEditableWarning={true}>Insert paragraph...</p> }
            { element.Type === "columns" && <div className="page-builder-element-columns">{ element.Childrens.map((c) => <PageBuilderElement key={element.Id} element={c} onDeleted={(el) => onDeleted(el)}/>) }</div> }
            { element.Type === "image" && <div>
                <img src={element.Value} />
                {/* <input type={"file"} className="form-control" value={element.Value}/> */}
                </div> }
            { element.Type === "button" && <a className="btn btn-light" contentEditable={true} suppressContentEditableWarning={true}></a> }

            <header className={ onhover ? "page-builder-element-header-show btn-group" : "page-builder-element-header btn-group" } role="group" aria-label="Action buttons">
                { (element.Type === 'columns' || element.Type === 'body') && <button className="btn btn-light" onClick={ () => setDialog("add") }><Icon Icon={"Add"} /></button>}
                { (element.Type !== 'body') && <button className="btn btn-light"><Icon Icon={"Up"} /></button> }
                { (element.Type !== 'body') && <button className="btn btn-light"><Icon Icon={"Down"} /></button> }
                { (element.Type !== 'body') && <button className="btn btn-light" onClick={ () => setDialog("edit") }><Icon Icon={"Edit"} /></button> }
                { (element.Type !== 'body') && <button className="btn btn-light" onClick={ () => props.onDeleted ? props.onDeleted(element) : true }><Icon Icon={"Close"} /></button> }
                { (element.Type === 'body') && <button className="btn btn-light"><Icon Icon={"EyeClosed"} /></button> }
            </header>
        </div>
        <Dialog title={'Add element'} show={ dialog === "add" } isForm={false} CloseDialog={() => setDialog("")}>
            <div className="menu">
                <div className="menu-element" onClick={() => onMenuItemClicked("title") }>
                    <div style={{ fontWeight: 'bold' }}>H1</div>
                    <div>Title</div>
                </div>
                <div className="menu-element" onClick={() => onMenuItemClicked("paragraph") }>
                    <Icon Icon={"Text"} />
                    <div>Paragraph</div>
                </div>
                <div className="menu-element" onClick={() => onMenuItemClicked("columns") }>
                    <Icon Icon={"Container"} />
                    <div>Columns</div>
                </div>
                <div className="menu-element" onClick={() => onMenuItemClicked("image") }>
                    <Icon Icon={"Image"} />
                    <div>Image</div>
                </div>
                <div className="menu-element" onClick={() => onMenuItemClicked("button") }>
                    <Icon Icon={"Button"}/>
                    <div>Button</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Carousel"} />
                    <div>Carousel</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Form"} />
                    <div>Form</div>
                </div>
            </div>
        </Dialog>
        <Dialog title={'Edit element'} show={ dialog === "edit" } isForm={false} CloseDialog={() => setDialog("")}>
            <div className="menu">
                <div className="menu-element">
                    <div style={{ fontWeight: 'bold' }}>H1</div>
                    <div>Title</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Text"} />
                    <div>Paragraph</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Container"} />
                    <div>Columns</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Image"} />
                    <div>Image</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Button"} />
                    <div>Button</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Carousel"} />
                    <div>Carousel</div>
                </div>
                <div className="menu-element">
                    <Icon Icon={"Form"} />
                    <div>Form</div>
                </div>
            </div>
        </Dialog>
    </div>);
}

export default PageBuilderElement
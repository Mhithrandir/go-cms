import { useDrag, useDrop } from "react-dnd";
import DropContainer from "./drop-container";
import Icon from "./icons";

function MenuItemGrab({ menu }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "MenuItem",
        item: menu,
        end(item, monitor) {
            // console.log(item);
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    }));
    const canDropGeneral = (item) => {
        return (menu.Parent !== item.ID && menu.ID !== item.ID && menu.ID !== item.Parent);
    }
    
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: "MenuItem",
            canDrop: (item) => {
                return (menu.Parent !== item.ID && menu.ID !== item.ID && menu.ID !== item.Parent);
            },
            drop: () => {
                // muove l'elemento
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }),
        []
    )
    const onclick = (direction) => {
        console.log(direction);
    }

    return (<div key={menu.ID} ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
            <div className="menu-item-grab container">
                <DropContainer className="row" style={{ lineHeight: '32px' }} item={menu} type={"MenuItem"} canDrop={canDropGeneral}>
                    <div className="col-auto"><Icon Icon={'Menu'}/></div>
                    <div className="col-auto"><Icon Icon={menu.Icon}/></div>
                    <div className="col-8">{ menu.Name }</div>
                    <span className="col-1" style={{ fontStyle: 'italic', color: '#8f8f8f' }}>({ menu.Route.Path })</span>
                    <div className="col-auto">
                        <button className="btn btn-link" onClick={() => onclick("Close")}><Icon Icon={'Close'}/></button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-link" onClick={() => onclick("Close")}><Icon Icon={'Edit'}/></button>
                    </div>
                </DropContainer>
                {/* <div className="row" ref={drop} style={{ lineHeight: '32px' }}>
                    <div className="col-auto"><Icon Icon={'Menu'}/></div>
                    <div className="col-auto"><Icon Icon={menu.Icon}/></div>
                    <div className="col-9">{ menu.Name }</div>
                    <span className="col-1" style={{ fontStyle: 'italic', color: '#8f8f8f' }}>({ menu.Route.Path })</span>
                    <div className="col-auto">
                        <button className="btn" onClick={() => onclick("Left")} disabled={menu.Parent === -1}><Icon Icon={'Left'}/></button>
                    </div>
                    <div className="col-auto">
                        <button className="btn" onClick={() => onclick("Right")}><Icon Icon={'Right'}/></button>
                    </div>
                    <div className="col-auto">
                        <button className="btn" onClick={() => onclick("Up")} disabled={menu.MenuOrder === 0}><Icon Icon={'Up'}/></button>
                    </div>
                    <div className="col-auto">
                        <button className="btn" onClick={() => onclick("Down")}><Icon Icon={'Down'}/></button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-link" onClick={() => onclick("Close")}><Icon Icon={'Close'}/></button>
                    </div>
                    <div><span className="text-bg-danger" style={{ minHeight: '25px', marginLeft: '15px', paddingLeft: '5px', width: '100%', display: 'block' }}>can't drop here</span></div>
                    {isOver && !canDrop && <div><span className="text-bg-danger" style={{ minHeight: '25px', marginLeft: '15px', paddingLeft: '5px', width: '100%', display: 'block' }}>can't drop here</span></div> }
                    {!isOver && canDrop && <div style={{ background: 'yellow', minHeight: '25px' }}>qwe</div> }
                    {isOver && canDrop && <div><span className="text-bg-success" style={{ minHeight: '25px', marginLeft: '15px', paddingLeft: '5px', width: '100%', display: 'block' }}>drop here</span></div> }
                </div> */}
            </div>
            <div style={{ marginLeft: '15px' }}>
                {menu.Childrens && <DropContainer showWhiteSpace={true} item={menu} type={"MenuItem"} canDrop={canDropGeneral}/>}
                {menu.Childrens && menu.Childrens.map((m) => {
                    return <>
                            {/* <DropContainer item={menu} type={"MenuItem"} canDrop={canDropGeneral}/> */}
                            <MenuItemGrab key={m.ID} menu={m} />
                        </>
                })}
            </div>
            {isOver && canDrop && <div><span className="text-bg-success" style={{ minHeight: '25px', marginLeft: '15px', paddingLeft: '5px', width: '100%', display: 'block' }}>asd drop here</span></div> }
            {isOver && !canDrop && <div><span className="text-bg-danger" style={{ minHeight: '25px', marginLeft: '15px', paddingLeft: '5px', width: '100%', display: 'block' }}>asd can't drop here</span></div> }
        </div>);
}

export default MenuItemGrab;
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import Icon from "./icons";

function DropContainer({ menus, menuIds, selectedMenuID, setSelectedMenu }) {
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({ id: "menu", data: { type: "MenuItem", menus } });

    return (<div className="col-5 col-menu" style={{ marginRight: '5px' }}>
            <SortableContext items={menuIds}>
                {menus && menus.map((m) => {
                    return (<div
                        ref={setNodeRef}
                        {...attributes}
                        {...listeners}
                        key={m.ID}
                        className={ m.ID === selectedMenuID ? "row menu-selected" : "row" }
                        style={{ lineHeight: "32px", transition, transform: CSS.Transform.toString(transform) }}
                        onClick={() => setSelectedMenu(m)}>
                        <div className="col-1"><Icon Icon={m.Icon}/></div>
                        <div className="col-6">{ m.Name }</div>
                        <span className="col-2" style={{ fontStyle: 'italic', color: '#8f8f8f' }}>({ m.Route.Path })</span>
                        <div className="col-1">
                            <button className="btn btn-link"><Icon Icon={'Close'}/></button>
                        </div>
                        <div className="col-1">
                            <button className="btn btn-link"><Icon Icon={'Edit'}/></button>
                        </div>
                    </div>);
                })}
            </SortableContext>
        </div>)
}

export default DropContainer;
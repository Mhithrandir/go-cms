
import {useDraggable} from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import Icon from './icons';

function Draggable({ menu, selectedMenuID }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id: menu.ID});
    // const style = {
    //     transform: CSS.Transform.toString(transform),
    //     transition,
    // };
  
  return (<div ref={setNodeRef} {...attributes} {...listeners}
        key={menu.ID}
        className={ menu.ID === selectedMenuID ? "row menu-selected" : "row" }
        style={{ lineHeight: "32px", transition, transform: CSS.Transform.toString(transform) }}
        // onClick={() => setSelectedMenu(m)}
        >
        <div className="col-1"><Icon Icon={menu.Icon}/></div>
        <div className="col-6">{ menu.Name }</div>
        <span className="col-2" style={{ fontStyle: 'italic', color: '#8f8f8f' }}>({ menu.Route.Path })</span>
        <div className="col-1">
            <button className="btn btn-link"><Icon Icon={'Close'}/></button>
        </div>
        <div className="col-1">
            <button className="btn btn-link"><Icon Icon={'Edit'}/></button>
        </div>
    </div>
  );
}

export default Draggable;
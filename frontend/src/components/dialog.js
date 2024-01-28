import Icon from "./icons";

function Dialog(props) {
    return (<div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id={props.id} tabIndex="-1" aria-labelledby="modal-title-1" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <form onSubmit={props.submit}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modal-title-1">{props.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ display: 'flex', minWidth: '80px', lineHeight: '23px' }}><Icon Icon={'Close'} /> Close</button>
              <button type={props.isForm !== undefined ? 'submit' : 'button'} data-bs-dismiss="modal" className="btn btn-primary" style={{ display: 'flex', minWidth: '80px', lineHeight: '23px' }}><Icon Icon={'Save'} /> {props.saveText !== undefined ? props.saveText : 'Save'}</button>
            </div>
        </form>
      </div>
    </div>
  </div>);
}

export default Dialog;
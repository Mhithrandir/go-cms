import { useRef } from "react";
import Icon from "./icons";

function Dialog(props) {
  const myform = useRef(null);
  const checkFormValidity = (e) => {
    // e.preventDefault();
    // if(myform.current?.checkValidity()) {
    //   // props.submit()
    //   myform.current?.submit();
    // }
  }
  
    return (props.show && <div className="my-modal-container">
      <div className="my-modal fade show" tabIndex="-1" aria-labelledby="modal-title-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <form ref={myform} onSubmit={props.submit}>
              <div className="my-modal-header text-bg-dark">
                <h1 className="modal-title fs-5" id="modal-title-1">{props.title}</h1>
                <button type="button" className="btn-close" aria-label="Close" onClick={props.CloseDialog}></button>
              </div>
              <div className="modal-body">
                {props.children}
              </div>
              <div className="modal-footer">
                <div className="btn-group" role="group" aria-label="Action buttons">
                  <button type="button" className="btn btn-secondary"
                    onClick={props.CloseDialog}
                    style={{ display: 'flex', minWidth: '80px', lineHeight: '23px' }}><Icon Icon={'Close'} /> Close</button>
                  <button
                    type={props.isForm !== undefined ? 'submit' : 'button'}
                    className="btn btn-primary"
                    style={{ display: 'flex', minWidth: '80px', lineHeight: '23px' }}>
                      <Icon Icon={'Save'} />
                      {props.saveText !== undefined ? props.saveText : 'Save'}
                  </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>);
}

export default Dialog;
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgClose } from "react-icons/cg";
import { GoLocation } from "react-icons/go";

const Modal = ({ isShowing, hide, url, userLocation, userName, userPic }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-background" onClick={hide}>
            <div className="modal-box">
              <div className="modal-content">
                <div className="modal-top-bar">
                  <a className="modal-close-button" onClick={hide}>
                    <div>
                      <CgClose />
                    </div>
                  </a>
                </div>
                <div className="image-box">
                  <img src={url} className="img-fluid" />
                </div>
                <div className="user-info">
                  <div className="modal-about-photo">
                    <img src={userPic} className="img-float" />
                    &nbsp;{userName}
                  </div>
                  <div className="modal-location-info">
                    <GoLocation className="modal-location-icon" />
                    {userLocation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;

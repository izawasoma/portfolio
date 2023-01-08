import React from "react";
import "./modal.css";

export const Modal = (props) => {
  return (
    <section className="modal">
        <div className="modalContentsWrapper">
          <div className="modalContents">
            {props.children}
          </div>
          <div className="modalCloseButton" onClick={props.clickEvent}>閉じる</div>
        </div>
    </section>
  )
}
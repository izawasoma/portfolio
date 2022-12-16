import React from "react";
import "./indexPuzzle.css";

export const IndexPuzzle = (props) => {
  return (
    <article className="indexPuzzle">
      <div className="imgWrap">
        <img src={props.img} />
      </div>
      <div className="formWrap">  
        <input type="text" />
        <button>回答</button>
      </div>
    </article>
  )
}
import React from "react";
import "./mindBox.css";

export const MindBox = (props) => {
  return (
    <article className="mindBox">
      <div className="no">{props.no}</div>
      <h3>{props.title}</h3>
      <p>{props.discription}</p>
    </article>
  )
}
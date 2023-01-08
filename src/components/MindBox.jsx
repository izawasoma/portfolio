import React,{useState} from "react";
import "./mindBox.css";

export const MindBox = (props) => {
  const [styleColor,setStyleColor] = useState("");

  const click = () => {
    setStyleColor("red");
  }
  
  return (
    <article className="mindBox">
      <div className="no" onClick={click}>{props.no}</div>
      <h3>{props.title1}<span className={styleColor}>{props.target}</span>{props.title2}</h3>
      <p>{props.discription}</p>
    </article>
  )
}
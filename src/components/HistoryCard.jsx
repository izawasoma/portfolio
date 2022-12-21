import React from "react";
import "./historyCard.css";

export const HistoryCard = (props) => {
  return (
    <div className="historyCard">
      <time dateTime="2022-08-01"><span className="year">{ props.year }</span><span className="date">{ props.date }</span></time>
      <h3><span>{props.title}</span><span>{props.subtitle}</span></h3>
      <p>{ props.discription }</p>
    </div>
  )
}
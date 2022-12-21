import React from "react";
import "./skillsCard.css";

export const SkillsCard = (props) => {

  const star = "★";
  const yellowStar = star.repeat(props.skillLevel);
  const greyStar = star.repeat(5 - props.skillLevel);

  return (
    <li className="skillsCard">
      <dl>
        <dt>{ props.skillName }</dt>
        <dd><span>{ yellowStar }</span><span>{ greyStar }</span></dd>
      </dl>
    </li>
  )
}
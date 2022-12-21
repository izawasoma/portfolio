import React from "react";
import "./profileBoxListS.css";
import profileIcon from "./../images/svg/profileIcon.svg"

export const ProfileBoxListS = (props) => {
  return (
    <div className="profileBoxListS">
      <img src={profileIcon} alt="プロフィール欄アイコン" />
      <dt>{ props.title }</dt>
      <dd>{ props.discription }</dd>
    </div>
  )
}
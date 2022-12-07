/* ライブラリ */
import React from "react";
/* CSS */
import "./index.css";
/* コンテンツファイル */
import topSharp from "./../images/svg/top_sharp.svg";
/* コンポーネント */
import { Scroll } from "./../components/Scroll";

export const Index = () => {
  return (
    <>
      <section className="sectionTop">
        <div className="topSharpWrapper">
          <img src={topSharp} alt="topSharp" />
        </div>
        <h2>
          hELLO!!!!
        </h2>
        <p>Welcome to MyRoom !!</p>
        <p>
          こんにちは。<br/>
          伊澤聡真のポートフォリオへようこそ。<br/>
          せっかくですし、まずは私と遊びませんか？
        </p>
        <Scroll></Scroll>
      </section>
    </>
  )
}

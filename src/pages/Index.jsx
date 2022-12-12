/* ライブラリ */
import React from "react";
/* CSS */
import "./index.css";
/* コンテンツファイル */
import topSharp from "./../images/svg/top_sharp.svg";
import door from "./../images/svg/door.svg";

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
      <section className="sectionLetsPuzzle">
        <h2>Let’s Puzzle !!!</h2>
        <p>
          ようこそ、<br/>
          伊澤聡真のポートフォリオへ。<br/>
          <br/>
          このポートフォリオの１ページの中にはたくさんの謎が仕掛けられています。<br/>
          <br/>
          全ての謎を解き明かして、鍵を見つけて、下の扉を開ければあなたの勝ちです。
        </p>
        <div>
          <img src={door} alt="door" />
        </div>
      </section>
    </>
  )
}

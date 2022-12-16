/* ライブラリ */
import React from "react";
/* CSS */
import "./index.css";
/* コンテンツファイル */
import topSharp from "./../images/svg/top_sharp.svg";
import door from "./../images/svg/door.svg";
import indexPuzzle1 from "./../images/svg/indexPuzzle1.svg";
import indexPuzzle2 from "./../images/svg/indexPuzzle2.svg";
import indexPuzzle3 from "./../images/svg/indexPuzzle3.svg";

/* コンポーネント */
import { Scroll } from "./../components/Scroll";
import { IndexPuzzle } from "./../components/IndexPuzzle";
import { ProfileBox } from "./../components/ProfileBox";
import { ProfileBoxImage } from "./../components/ProfileBoxImage";
import { ProfileBoxListS } from "./../components/ProfileBoxListS";
import { ProfileBoxListL } from "./../components/ProfileBoxListL";
import { HistoryCard } from "./../components/HistoryCard";

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
      <section className="sectionPuzzles">
        <h2>puzzles</h2>
        <IndexPuzzle
          img={indexPuzzle1}
          imgAlt="問題1"
        ></IndexPuzzle>
        <IndexPuzzle
          img={indexPuzzle2}
          imgAlt="問題2"
        ></IndexPuzzle>
        <IndexPuzzle
          img={indexPuzzle3}
          imgAlt="問題3"
        ></IndexPuzzle>
      </section>
      <section className="sectionAboutMe">
        <h2>About Me</h2>
        <ProfileBox>
          <ProfileBoxImage
            src={indexPuzzle1}
            alt="alt"
          ></ProfileBoxImage>
          <ProfileBoxListS
            title="名前"
            discription="伊澤聡真"
          />
          <ProfileBoxListS
            title="年齢"
            discription="23歳"
          />
          <ProfileBoxListS
            title="出身地"
            discription="和歌山県"
          />
          <ProfileBoxListL
            title="趣味"
            discription="最近、ハマっていることは「リアル脱出ゲームに参加すること」。脱出ゲームへの参加回数は60回。どのくらいハマっているかというと、週５でサウナに行く人程度の熱狂度合。"
          />
          <ProfileBoxListL
            title="特技"
            discription="パズル作家としても活動中。株式会社ニコリ（ナンプレを作った会社）の季刊誌にて新作パズルをいくつも生み出し掲載された。"
          />
          <ProfileBoxListL
            title="好きなもの・コト"
            discription="芝犬、ラジオ、サカナクション、クイズ番組、ドラゴンクエスト、僕のヒーローアカデミア、ガリレオ（ドラマ）、水曜どうでしょう"
          />
        </ProfileBox>
      </section>
      <section className="sectionHistory">
        <h2>History</h2>
        <HistoryCard
          title="チームラボ様"
          subtitle="インターン"
          year="2022"
          date="08.01"
          discription="Javaを用いた保守業務。既存のシステムにCSVダウンロードの機能を実装しました。（期間２週間）"
        />
        <HistoryCard
          title="クオリティソフト様"
          subtitle="インターン"
          year="2022"
          date="08.01"
          discription="Angular・TypeScriptを用いた保守業務。APIから取得したデータを元にグラフを描画したり、設定値をPOST送信したり。最後には単体テストも実施。
          （期間１ヶ月）"
        />
        <HistoryCard
          title="c-tag様"
          subtitle="アルバイト"
          year="2022"
          date="08.01"
          discription="PHP（Laravel）、Bootstrap5.0を用いた社内システム作成を行っています。日報管理システムを作成しました。"
        />
      </section>
    </>
  )
}

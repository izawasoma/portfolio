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
import star from "./../images/svg/star.svg";
import pentagon from "./../images/svg/pentagon.svg";
import hexagon from "./../images/svg/hexagon.svg";

/* コンポーネント */
import { Scroll } from "./../components/Scroll";
import { IndexPuzzle } from "./../components/IndexPuzzle";
import { ProfileBox } from "./../components/ProfileBox";
import { ProfileBoxImage } from "./../components/ProfileBoxImage";
import { ProfileBoxListS } from "./../components/ProfileBoxListS";
import { ProfileBoxListL } from "./../components/ProfileBoxListL";
import { HistoryCard } from "./../components/HistoryCard";
import { SkillsBox } from "./../components/SkillsBox";
import { SkillsCard } from "./../components/SkillsCard";
import { MindBox } from "./../components/MindBox";

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
      <section className="sectionMySkill">
        <h2>Skills</h2>
        <SkillsBox>
          <SkillsCard skillName="MySQL" skillLevel="5" />
          <SkillsCard skillName="PHP" skillLevel="5" />
          <SkillsCard skillName="Laravel" skillLevel="4" />
          <SkillsCard skillName="HTML,CSS" skillLevel="5" />
          <SkillsCard skillName="Git,Github" skillLevel="4" />
          <SkillsCard skillName="PhotoShop" skillLevel="5" />
          <SkillsCard skillName="Illustrator" skillLevel="4" />
          <SkillsCard skillName="Node.js" skillLevel="3" />
          <SkillsCard skillName="PostgreSQL" skillLevel="4" />
          <SkillsCard skillName="Heroku" skillLevel="3" />
          <SkillsCard skillName="React" skillLevel="3" />
          <SkillsCard skillName="Angular" skillLevel="3" />
          <SkillsCard skillName="Java" skillLevel="2" />
          <SkillsCard skillName="Swift" skillLevel="1" />
        </SkillsBox>
      </section>
      <section className="sectionVision">
        <div className="frontBlock">
          <h2>Vision</h2>
          <h3>
            人を笑顔にするものを<br/>作りたい。
          </h3>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
          </p>
          <h3>
            人を笑顔にするものを<br/>作りたい。
          </h3>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
          </p>
        </div>
        <div className="backImagesWrapper">
          <img src={star} alt="star" className="star" />
          <img src={pentagon} alt="pentagon" className="pentagon" />
          <img src={hexagon} alt="hexagon" className="hexagon" />
        </div>
      </section>
      <section className="sectionMind">
        <h2>Mind</h2>
        <MindBox
          no="01"
          title="要求を超えてゆく"
          discription="私の通う学校では学習内容に対して、作品を提出するという形で習熟度を測定します。
          これらは課題と呼ばれ、「PHPで掲示板サイトを作る」「カフェの紹介を作成する」など様々な内容の物を扱います。
          これらの課題には「仕様」が提示され、使用さえ満たせば承認となりますが、私はそれでは「ただの作業になってしまう」
          と考え、仕様には無い部分までこだわって作品として提出するようにして来ました。掲示板サイトであれば、
          ソースコードだけではなく、見た目を意識してみたり、カフェの紹介サイトであれば、見に来てくれた人が
          ワクワクするような仕掛けを考えてみたり。仕様にない部分を考えることで周りの学生よりも高い習熟度で
          学習して来ました。"
        />
      </section>
    </>
  )
}

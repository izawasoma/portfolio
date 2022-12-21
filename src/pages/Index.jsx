/* ライブラリ */
import React from "react";
/* CSS */
import "./index.css";
/* コンテンツファイル */
import topSharp from "./../images/svg/top_sharp.svg";
import star from "./../images/svg/star.svg";
import pentagon from "./../images/svg/pentagon.svg";
import hexagon from "./../images/svg/hexagon.svg";
import myPicture from "./../images/jpg/my_picture.jpeg"

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
          ぜひゆっくりしていってくださいね！
        </p>
        <Scroll></Scroll>
      </section>
      <section className="sectionAboutMe">
        <h2>About Me</h2>
        <ProfileBox>
          <ProfileBoxImage
            src={myPicture}
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
            人に知られ、誇れる作品を<br/>生み出したい。
          </h3>
          <p>
            「あの作品ってお前が作ってたの！？」って言われるような作品を作る事が夢です。多くの人に知られ使われるということは需要があり、色々な人に愛されると言うことです。将来はそんなサービスを提案できる企画エンジニアになりたいです。
          </p>
          <h3>
            人を笑顔にするものを<br/>作りたい。
          </h3>
          <p>
            「上から下にスクロールすると１つの物語になっている」「カメラをかざすだけで翻訳されたり、検索される」…といった「新しいもの」や「仕掛けのあるもの」には人が「楽しい」「面白い」「すごい」などの心を動かすワクワクの種があります。そういった技術や企画に携わる仕事がしたいです。
          </p>
          <h3>
            Webシステムで人を集めて<br/>イベントを開きたい。
          </h3>
          <p>
            高校生の時にはパワーポイントやお絵かきソフトを使って謎解きイベントを。専門学校ではWebシステムを使ってクイズ大会を行いました。今後もITを使ったイベントを開いていろんな人たちと交流できる場を開いていきたいです。（Youtubeとかで番組作れないかなぁ…）
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
          title="常にアソビゴコロを。"
          discription="子供も大人も熱中できるものには必ず「楽しい」「面白い」と思う要素がどこかにあると思います。作品を作る時には、できる限りそういった要素を詰め込められないかを考えるようにしています。"
        />
        <MindBox
          no="02"
          title="常にチャレンジを。"
          discription="今まで、謎解きイベントを何度か開催して来ましたが、クラス、学内、一般向けと規模のステップアップに挑戦してきました。普段の学習も同じく前回を超える何かを求めて行動するようにしています。"
        />
        <MindBox
          no="03"
          title="常に学ぶ姿勢を。"
          discription="「学ぶ」は「真似る」に語源があると言いますが、先生や先輩の意見は逃さず「メモ」して行動に移すように心がけています。"
        />
      </section>
    </>
  )
}

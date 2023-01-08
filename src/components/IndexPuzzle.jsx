import React,{useState} from "react";
import "./indexPuzzle.css";
import correct from "./../images/png/correct.png";

export const IndexPuzzle = (props) => {
  const [answer,setAnswer] = useState("");
  const [styleInCorrect,setStyleInCorrect] = useState("");
  const [stateIsClear,setStateIsClear] = useState(false);
  const [statePuzzle,setStatePuzzle] = useState("first");
  const img = new Image();
  //プリロード
  img.src = correct;

  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
  }

  const judgeAnswer = () => {
    if(answer == props.answer){
      console.log("正解です");
      setStatePuzzle("correct");
      setTimeout(function(){
        setStatePuzzle("displayHint");
      },2500)
    }
    else{
      console.log("不正解です");
      setStyleInCorrect("inCorrect");
      setTimeout(function(){
        setStyleInCorrect("");
      },1000);
    }
  }

  const PuzzleDisplay = () => {
    if(statePuzzle == "first"){
      return (
        <div className="imgWrap">
          <img src={props.img} />
        </div>
      );
    }
    else if(statePuzzle == "correct"){
      return (
        <div className="imgWrap boing">
          <img src={correct} alt="" />
        </div>
      );
    }
    else if(statePuzzle == "displayHint"){
      return (
        <div className="hintBox">
          { props.hint }
        </div>
      );
    }
  }

  return (
    <article className="indexPuzzle">
      <PuzzleDisplay />
      { statePuzzle == "first" ? (
        <div className="formWrap">  
          <input type="text" value={answer} onInput={handleChangeAnswer} className={styleInCorrect} placeholder={props.placeholder} />
          <button onClick={judgeAnswer}>回答</button>
        </div>
      ) : "" }
    </article>
  )
}
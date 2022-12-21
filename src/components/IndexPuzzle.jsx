import React,{useState} from "react";
import "./indexPuzzle.css";

export const IndexPuzzle = (props) => {
  const [answer,setAnswer] = useState("");
  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
  }
  const judgeAnswer = () => {
    const puzzleBox = document.querySelector(".indexPuzzle");
    puzzleBox.innerHTML = "正解です"
  }

  return (
    <article className="indexPuzzle">
      <div className="imgWrap">
        <img src={props.img} />
      </div>
      <div className="formWrap">  
        <input type="text" value={answer} onInput={handleChangeAnswer}/>
        <button onClick={judgeAnswer}>回答</button>
      </div>
    </article>
  )
}
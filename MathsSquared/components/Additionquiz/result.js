import React from "react";
import api from "../../io/api";

const scoreBoardStyle = {
  position: "relative",
  height: "700px",
};
const scoreStyle = {
  position: "absolute",
  fontSize: "3em",
  top: "250px",
  textAlign: "center",
  marginLeft: "37px",
};
const playbtnStyle = {
  position: "absolute",
  fontSize: "1.4em",
  padding: "10px",
  top: "350px",
  backgroundColor: "rgb(46, 182, 46)",
  color: "rgb(255, 255, 255)",
  width: "150px",
  left: "0px",
  right: "0px",
  margin: "auto",
  outline: "none",
  cursor: "pointer",
};

const Result = ({ score, playAgain, userid }) => {
  const payload = {
    id: userid,
    quiz_name: "AdditionQuiz",
    results: score,
  };
  if (score) {
    const { status } = api.post("/result", payload);
  }

  return (
    <div className="score-board" style={scoreBoardStyle}>
      <div className="score" style={scoreStyle}>
        You scored {score} / 5 correct answers!
      </div>
      <button className="playBtn" style={playbtnStyle} onClick={playAgain}>
        Play again!
      </button>
    </div>
  );
};

export default Result;

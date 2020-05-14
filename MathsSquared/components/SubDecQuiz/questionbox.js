import React, { useState } from "react";

const questionBoxStyle = {
  position: "relative",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  marginTop: "5px",
  padding: "15px",
  boxSizing: "border-box",
  backgroundColor: "rgb(250, 250, 250)"
};

const questionStyle = {
  fontSize: "1.2em",
  fontWeight: "bold",
  marginBottom: " 5px"
};

const answerbtnStyle = {
  position: "relative",
  padding: "10px",
  backgroundColor: "rgb(250, 151, 37)",
  display: "inline-block",
  margin: "10px",
  outline: "none",
  border: "none",
  fontSize: "1em",
  color: "rgb(255, 255, 255)",
  fontWeight: "bold",
  borderRadius: "4px",
  cursor: "pointer"
};

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox" style={questionBoxStyle}>
      <div className="question" style={questionStyle}>
        {question}
      </div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          style={answerbtnStyle}
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;

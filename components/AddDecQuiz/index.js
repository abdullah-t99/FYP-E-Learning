import React from "react";
import QuestionBox from "./questionbox";
import quizService from "./quizService";
import Result from "./result";

class Quiz extends React.Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  containerStyle = {
    height: "800px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "10px",
    boxSizing: "border-box",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
  };

  render() {
    return (
      <>
        <style />
        <div className="container" style={this.containerStyle}>
          {this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionId }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={(answer) => this.computeAnswer(answer, correct)}
                />
              )
            )}
          {this.state.responses === 5 ? (
            <Result
              score={this.state.score}
              playAgain={this.playAgain}
              userid={this.props.userid}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default Quiz;

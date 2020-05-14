import React from "react";
import { DefaultLayout } from "../../../components/layout/index";
import Router from "next/router";
import InputQuiz from "../../../components/inputQuiz/index";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};

const subtractionQuestions = [
  { question: "12 - 8", answer: "4" },
  { question: "19 - 10", answer: "9" },
  { question: "26 - 18", answer: "8" },
  { question: "56 - 31", answer: "25" },
  { question: "85 - 69", answer: "16" },
  { question: "44 - 52", answer: "-8" },
  { question: "160 - 92", answer: "68" },
  { question: "190 - 226", answer: "-36" },
];

const SubtractionQuiz = ({ id }) => {
  return (
    <>
      <DefaultLayout>
        <div style={styles.wrapper}>
          <h1>Subtraction Quiz</h1>
          <br />
          <InputQuiz
            questions={subtractionQuestions}
            quizname="SubtractionQuiz"
            userid={id}
          />
          <br />
          <p
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => Router.back()}
          >
            Go Back
          </p>
        </div>
      </DefaultLayout>
    </>
  );
};

SubtractionQuiz.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default SubtractionQuiz;

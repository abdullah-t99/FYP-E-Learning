import React from "react";
import { DefaultLayout } from "../../../components/layout/index";
import Quiz from "../../../components/Additionquiz/index";
import Router from "next/router";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};

const AdditionQuiz = ({ id }) => {
  return (
    <>
      <DefaultLayout>
        <div style={styles.wrapper}>
          <h1>Addition Quiz</h1>
          <Quiz userid={id} />
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

AdditionQuiz.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default AdditionQuiz;

import React from "react";
import { DefaultLayout } from "../../../components/layout/index";
import Quiz from "../../../components/Divisionquiz/index";
import Router from "next/router";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40,
  },
};

const DivisionQuiz = ({ id }) => {
  return (
    <>
      <DefaultLayout>
        <div style={styles.wrapper}>
          <h1>Division Quiz</h1>
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

DivisionQuiz.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default DivisionQuiz;

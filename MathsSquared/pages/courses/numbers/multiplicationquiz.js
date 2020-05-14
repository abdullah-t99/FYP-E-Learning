import React from "react";
import { DefaultLayout } from "../../../components/layout/index";
import Quiz from "../../../components/Multiplicationquiz/index";
import Router from "next/router";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40
  }
};

const Multiplicationquiz = () => {
  return (
    <>
      <DefaultLayout>
        <div style={styles.wrapper}>
          <h1>Multiplication Quiz</h1>
          <h5 className="text-center">
            Try doing these multiplication without using a calculator. Try using
            any type of method you have learnt and see what you get!
          </h5>
          <Quiz />
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

export default Multiplicationquiz;

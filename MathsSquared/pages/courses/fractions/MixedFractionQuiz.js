import React from "react";
import { DefaultLayout } from "../../../components/layout/index";
import Router from "next/router";
import DragAndDropQuiz from "../../../components/DragAndDropQuiz/index";
import Container from "../../../components/MixedFractionQuiz/index";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    margin: "40px 20%",
    padding: 40
  }
};

const MixedFractionQuiz = () => {
  return (
    <>
      <DefaultLayout>
        <div style={styles.wrapper}>
          <h1>Mixed Fraction Quiz</h1>
          {/* <DragAndDropQuiz /> */}
          <p>Drag the answers from the left into the boxes on the right</p>
          <DndProvider backend={Backend}>
            <Container />
          </DndProvider>

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

export default MixedFractionQuiz;

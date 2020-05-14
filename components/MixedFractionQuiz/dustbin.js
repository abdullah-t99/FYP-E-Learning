import React, { useState } from "react";
import { useDrop } from "react-dnd";
const style = {
  width: "50px",
  border: "1px solid grey",
  display: "inline-block",
  height: "50px",
  marginBottom: "5px",
};
const Dustbin = ({ accept, lastDroppedItem, onDrop, correctAnswer }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = "white";

  return (
    <>
      <div ref={drop} style={{ ...style, backgroundColor }}>
        {lastDroppedItem && <p> {lastDroppedItem.name}</p>}
      </div>
      {lastDroppedItem && lastDroppedItem.name === correctAnswer ? (
        <div class="alert alert-success" role="alert">
          Correct
        </div>
      ) : lastDroppedItem ? (
        <div class="alert alert-danger" role="alert">
          Incorrect
        </div>
      ) : null}
    </>
  );
};
export default Dustbin;

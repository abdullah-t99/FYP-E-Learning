import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";
import update from "immutability-helper";
import questions from "./questions";

const Container = () => {
  const [dustbins, setDustbins] = useState([
    {
      numerator: "20",
      denominator: "3",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER2,
    },
    {
      numerator: "65",
      denominator: "6",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER1,
    },
    {
      numerator: "12",
      denominator: "8",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER3,
    },
    {
      numerator: "25",
      denominator: "6",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER4,
    },
    {
      numerator: "15",
      denominator: "8",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER5,
    },
    {
      numerator: "30",
      denominator: "8",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER6,
    },
    {
      numerator: "16",
      denominator: "3",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER7,
    },
    {
      numerator: "59",
      denominator: "3",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER8,
    },
    {
      numerator: "113",
      denominator: "6",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER9,
    },
    {
      numerator: "57",
      denominator: "6",
      accepts: [
        ItemTypes.ANSWER1,
        ItemTypes.ANSWER2,
        ItemTypes.ANSWER3,
        ItemTypes.ANSWER4,
        ItemTypes.ANSWER5,
        ItemTypes.ANSWER6,
        ItemTypes.ANSWER7,
        ItemTypes.ANSWER8,
        ItemTypes.ANSWER9,
        ItemTypes.ANSWER10,
      ],
      lastDroppedItem: null,
      correctAnswer: ItemTypes.ANSWER10,
    },
  ]);
  const [boxes] = useState([
    { name: "5 1/3", type: ItemTypes.ANSWER7 },
    { name: "6 2/3", type: ItemTypes.ANSWER1 },
    { name: "19 2/3", type: ItemTypes.ANSWER8 },
    { name: "10 5/6", type: ItemTypes.ANSWER2 },
    { name: "18 5/6", type: ItemTypes.ANSWER9 },
    { name: "1 4/8", type: ItemTypes.ANSWER3 },
    { name: "4 1/6", type: ItemTypes.ANSWER4 },
    { name: "1 7/8", type: ItemTypes.ANSWER5 },
    { name: "3 6/8", type: ItemTypes.ANSWER6 },
    { name: "9 3/6", type: ItemTypes.ANSWER10 },
    { name: "1 7/8", type: ItemTypes.ANSWER5 },
  ]);
  const style = {
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    float: "left",
  };
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, dustbins]
  );

  return (
    <div className="row">
      <div className="col-lg-6" style={{ overflow: "hidden", clear: "both" }}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
      <div className="col-lg-6">
        {dustbins.map(
          (
            { accepts, lastDroppedItem, numerator, denominator, correctAnswer },
            index
          ) => (
            <div style={{ ...style }}>
              <div className="col">
                <sup>{numerator}</sup>&frasl;
                <sup>{denominator}</sup> =
              </div>

              <div className="col">
                <Dustbin
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={(item) => handleDrop(index, item)}
                  correctAnswer={correctAnswer}
                  key={index}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Container;

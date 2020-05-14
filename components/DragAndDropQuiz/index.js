import React, { Component } from "react";
import Item from "../DragAndDropQuiz/item";
import Target from "../DragAndDropQuiz/Target";
// import Target from "./Target";
import Card from "../DragAndDropQuiz/Card";
// import Card from "./Card";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
const update = require("immutability-helper");
import "./index.css";

export default class DragAndDropQuiz extends Component {
  state = {
    droppedItem: "",
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" }
    ],
    cards: [
      {
        id: 1,
        text: "Write a cool JS library"
      },
      {
        id: 2,
        text: "Make it generic enough"
      },
      {
        id: 3,
        text: "Write README"
      },
      {
        id: 4,
        text: "Create some examples"
      },
      {
        id: 5,
        text:
          "Spam in Twitter and IRC to promote it (note that this element is taller than the others)"
      },
      {
        id: 6,
        text: "???"
      },
      {
        id: 7,
        text: "PROFIT"
      }
    ]
  };

  deleteItem = item => {
    // this.setState(prevState => {
    //   return {
    //     items: prevState.items.filter(item => item.id !== id)
    //   };
    // });
    this.setState({
      droppedItem: item
    });
  };

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        }
      })
    );
  };

  render() {
    return (
      <DndProvider backend={Backend}>
        <div className="App">
          <div className="App-intro">
            <div className="app-container">
              <div className="item-container" style={{ marginLeft: "240px" }}>
                {this.state.items.map((item, index) => (
                  <Item
                    key={item.id}
                    item={item}
                    handleDrop={id => this.deleteItem(item)}
                  />
                ))}
              </div>
            </div>

            <p>Convert these improper fractions into mixed fractions.</p>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>20</sup>&frasl;<sub>3</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>65</sup>&frasl;<sub>6</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>12</sup>&frasl;<sub>8</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>25</sup>&frasl;<sub>6</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>15</sup>&frasl;<sub>8</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>30</sup>&frasl;<sub>8</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>16</sup>&frasl;<sub>3</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>59</sup>&frasl;<sub>3</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>113</sup>&frasl;<sub>6</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col" style={{ marginRight: "-290px" }}>
                      <sup>57</sup>&frasl;<sub>6</sub>
                      <b>= </b>
                    </div>
                    <div className="col">
                      <Target droppedItem={this.state.droppedItem} />
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>

            {/* <div className="card-container">
              {this.state.cards.map((card, i) => (
                <Card
                  key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.moveCard}
                />
              ))}
            </div> */}
          </div>
        </div>
      </DndProvider>
    );
  }
}

import React, { Component } from "react";
import { DropTarget } from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, droppedItem } = this.props;
    const backgroundColor = hovered ? "lightgreen" : "none";

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        {droppedItem.name}
      </div>
    );
  }
}

export default DropTarget("item", {}, collect)(Target);

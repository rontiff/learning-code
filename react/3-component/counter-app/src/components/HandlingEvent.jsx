import React, { Component } from "react";

class HandlingEvent extends Component {
  state = {
    count:0
  };

  handleIncrement(){
    return console.log("Increment Clicked")
  }

  render() {
    return (
      <React.Fragment>

        {/* Property of Button DOM event : onClick */}
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default HandlingEvent;

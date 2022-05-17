import React, { Component } from "react";

//Two method of Conditional Render:

//1. Create if-statement
//2. Single if-statement without else part
    /* true && false --> return false */
    /* true && "hi"  --> return "hi" */
    /* true && "hi" && 1  --> return 1 (last value) */

class ConditionalRender extends Component {
  // empty array will return "<p>there is no tag</p>"
  state = {
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  render() {
    return (
      <React.Fragment>
        {/* //method 1 if-statement conditional render */}
        {this.renderTag()}

        {/* //method 2 Single if-statement without else part */}
        {this.state.tags.length === 0 && "Please create a new tag."}
      </React.Fragment>
    );
  }


  //method 1 if-statement conditional render
  renderTag() {
    if (this.state.tags.length === 0) {
      return <p>there is no tag</p>;
    } else if (this.state.tags.length !== 0) {
      return (
        <ol>
          {this.state.tags.map(function (tag) {
            return <li key={tag}>{tag}</li>;
          })}
        </ol>
      );
    }
  }

  
}

export default ConditionalRender;

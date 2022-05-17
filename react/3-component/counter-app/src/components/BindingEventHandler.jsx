import React, { Component } from "react";

// Question: What is Bind Method doing?
// Answer:   Bind (綁定) an object to a function, and reference it using "this".


class BindingEventHandler extends Component {
  state = {
    count:0
  };

//   constructor(){
//       super();
//       this.handleIncrement = this.handleIncrement.bind(this);
//   }

//arrow function binding method
  handleIncrement=()=>{
    return console.log("Increment Clicked", this)  
  }


  render() {
    return (
      <React.Fragment>

        <p>Binding Event Handler</p>

        <button onClick={this.handleIncrement}>Increment</button>

      </React.Fragment>
    );
  }
}

export default BindingEventHandler;

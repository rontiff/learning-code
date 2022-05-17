import React, { Component } from "react";


class PassEventArgument extends Component {

  state = {
    count:0
  };

  // When you need to pass an argument to your event handlers 

  // pass an arrow function in the body of the function called

  // method taking parameter example
  
  handleIncrement=product=>{
    console.log(product)
    this.setState({count:this.state.count+1})
  }

  formatCount1(){
    const {count}=this.state;
    return count ===0 ? "zero" : count;
}

  render() {
    return (
      <React.Fragment>

        {/* using Inline Function */} 
        <button onClick={()=>this.handleIncrement(product)}>Increment</button>
        <div>{this.formatCount1()}</div>


      </React.Fragment>
    );
  }
}

export default PassEventArgument;

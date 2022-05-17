import React, { Component } from "react";


// How does UPDATE works: 
// 1. click imcrement button
// 2. the handleIncrement function udpate count using "this.setState"
// 3. the render method will be call in the future. 
// 4. React will compare what is changed. 
// 5. React will find out <div>{this.formatCount1()}</div> need to update. 
// 6. Only the div element is updated 



class PassEventArgument extends Component {

  //in React, we don't modify the state directly.
  state = {
    count:0
  };

// "this.setState" tells React we are updating the state 
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }

  formatCount1(){
    const {count}=this.state;
    return count ===0 ? "zero" : count;
}

  render() {
    return (
      <React.Fragment>

        <p>click this button, it will +1</p>

        <button onClick={this.handleIncrement}>Increment</button>
        <div>{this.formatCount1()}</div>


      </React.Fragment>
    );
  }
}

export default PassEventArgument;

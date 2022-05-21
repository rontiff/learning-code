import React, { Component } from 'react'


class IntroState extends Component {

    //state is a special property object in react
    //state object include any data "this" component need
    //create state = create element need to change dynamically
    state={
        count:0,
    }

    render() { 
  
        return(
            <React.Fragment>
                <span>{this.state.count}</span>
                <button>{this.formatCount2()}</button>
            </React.Fragment>
        );
    }

    formatCount1(){
    // Check the count number
        return this.state.count ===0 ? "zero" : this.state.count;
    }

    // Use object destructuring simplify code
    formatCount2(){
        const {count}=this.state;
        return count ===0 ? "zero" : count;
    }
}
 
export default IntroState;
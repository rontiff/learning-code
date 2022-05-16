
// short cut
import React, { Component } from 'react'; //short cut import react :imrc

//short cut create class :cc
class Counter extends Component {

    state={
        count:1,
    };
    render() { 
        return (
            //create dynamic element
            //"this" is the current object.
            //"state" is the special property object in React include any data that this component need.
            <React.Fragment>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </React.Fragment>
            );
    }
}
export default Counter;

import React, { Component } from 'react'

class PlusMinusOne extends Component {
    state ={
        count:0
    }
    // step 2. run this function, it will update count
    AddCount=()=>{
        this.setState({count:this.state.count+1})
    }
    MinusCount=()=>{
        this.setState({count:this.state.count-1})
    }
    showNumber(){
     return this.state.count
    }
    

    render() {
        return(
       <React.Fragment>
           {/* step1. click button and call this.AddCount */}
           <button onClick={this.AddCount}>Increment</button>
           <button onClick={this.MinusCount}>Decrement</button>

           {/* /step 3. count is changed in the function, React will update the div  */}
           <div>{this.showNumber()}</div>

       </React.Fragment>
        );
    }
}
 
export default PlusMinusOne;
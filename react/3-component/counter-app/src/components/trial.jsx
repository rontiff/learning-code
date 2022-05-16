import React, { Component } from 'react'


class Trial extends Component {
    state = { 
        ranking:152,
     } 

    render() { 
        return(
        <React.Fragment>
            <h1>{this.checkRanking()}</h1>
        </React.Fragment>
        );
    };
    
    checkRanking(){
        if (this.state.ranking===0){
            return <p>You currently have no rank</p>
        }else if (this.state.ranking!==0) {
            return <p>Your rank:  {this.state.ranking}th </p>
        }
    }
}
 
export default Trial;
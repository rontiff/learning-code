// short cut
import React, { Component } from 'react'; //short cut import react :imrc

//short cut create class :cc
class Counter extends Component {
    // state is object 
    state={
        count:333,
        tag:['tag1','tag2','tag3']
    };

  
    
    render() { 
        return (
            <React.Fragment>
                <div>
                    {this.renderTag()}
                </div>
            </React.Fragment>
            );
    }

    renderTag(){
        if (this.state.tag.length===0){
            return <p>there is no tag</p>;
        }else if (this.state.tag.length!==0){
        return <ul>{this.state.tag.map(function(tag){
                     return <li key={tag}>{tag}</li>})}
               </ul>;
        }
    }

}
export default Counter;


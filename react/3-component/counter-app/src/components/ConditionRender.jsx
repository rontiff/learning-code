import React, { Component } from 'react'


class ConditionalRender extends Component {
       
    // if no tag element, return "<p>there is no tag</p>"
    state={
        tag:['tag1','tag2','tag3','tag4']
    }

    render() { 
        return(
            <React.Fragment>
                {this.renderTag()}
            </React.Fragment>
        );
    }

    renderTag(){
        if (this.state.tag.length===0){
            return <p>there is no tag</p>;
        }else if(this.state.tag.length!==0){
            return <ol>{this.state.tag.map(function(tag){
                        return <li key={tag}>{tag}</li>
                    })}
                   </ol>
        };     
    }
}
 
export default ConditionalRender;
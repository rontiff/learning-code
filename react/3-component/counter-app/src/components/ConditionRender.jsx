import React, { Component } from 'react'


class ConditionalRender extends Component {
       
    // if no tag element, return "<p>there is no tag</p>"
    state={
        tags:['tag1','tag2','tag3','tag4']
    }

    render() { 
        return(
            <React.Fragment>
                {/* if statement is true, the string will show up.  */}
                {this.state.tags.length===0 && "Please create a new tag."}
                {this.renderTag()}
            </React.Fragment> 
        );
    }

    renderTag(){
        if (this.state.tags.length===0){
            return <p>there is no tag</p>;
        }else if(this.state.tags.length!==0){
            return <ol>{this.state.tags.map(function(tag){
                        return <li key={tag}>{tag}</li>
                    })}
                   </ol>
        };     
    }
}
 
export default ConditionalRender;
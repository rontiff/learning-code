import React, { Component } from 'react'


class ListRender extends Component {
    
    state={
        tag:['tag1','tag2','tag3']
    }

    render() { 
        return(
            <React.Fragment>
                {/* the key is unique only in that list.  */}
                <ul>
                    {this.state.tag.map(function(tag){
                        return <li key={tag}>{tag}</li>
                    })}
                </ul>
            </React.Fragment>
        );
    }
    //because if the state of this react element in the virtual DOM changes, 
    //react wants to quickly figure out what element is changed, and where in
    //the DOM it should make changes to keep the DOM in sync with the virtual DOM.
}
 
export default ListRender;
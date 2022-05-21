import React, { Component } from 'react'


class SpecifyChildren extends Component {
    render() { 
        return(
            //calling React.createElement('h1)
            //2 element side to side doesn't work
            
            //remove "div" with "React.Fragment"
            <React.Fragment>
                <h1 style={{color:"blue"}}>This is the Specify Children component</h1>;
            </React.Fragment>
        );
    }
}
 
export default SpecifyChildren;
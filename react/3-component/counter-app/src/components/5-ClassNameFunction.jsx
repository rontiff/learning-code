import React, { Component } from 'react'


class ClassNameFunction extends Component {
    
    state={
        count:0,
    }

    render() { 

        return(
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount2()}</span>
            </React.Fragment>
        );
    }
    //use Function to edit className element (aka css class)
    //if 0, yellow color. else, blue color. 
    getBadgeClasses(){
        let classes = "badge m-2 "
        classes += (this.state.count===0) ? "badge-warning":"budge-primary";
        return classes;
    }

    formatCount2(){
        const {count}=this.state;
        return count ===0 ? "zero" : count;
    }
}
 
export default ClassNameFunction;
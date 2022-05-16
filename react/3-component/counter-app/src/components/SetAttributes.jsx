import React, { Component } from 'react'


class SetAttributes extends Component {

    
    state={
        count:0,
        imageUrl:'https://picsum.photos/200'
    }
    //apply with "this.style"
    style={
        fontSize:30,
        fontWeight:'bold'
    }

    render() { 
        //add image
        //className = css class 
        //style
        //inline style
        return(
            <React.Fragment>

                {/* add image */}
                <img src={this.state.imageUrl} alt="random image" />

                {/* className and Style */}
                <span style={this.style} className='badge badge-primary m-2'>{this.formatCount2()}</span>

                {/* inline Style */}
                <span style={{fontSize:30}} className='badge badge-primary m-2'>{this.formatCount2()}</span>

                <button className='btn btn-secondary btn-sm'>Increment</button>

            </React.Fragment>
        );
    }

    formatCount2(){
        const {count}=this.state;
        return count ===0 ? "zero" : count;
    }
}
 
export default SetAttributes;
import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>            
                <div>aaaaa</div>
                <div>{this.props.currentBook}</div>
            </div>
            
         )
    }
}
 
function mapStateToProp(state){
    return {
        currentBook: state.activeBook
    }
}

export default connect(mapStateToProp)(BookDetail);
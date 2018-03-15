import React, { Component } from "react";
import { connect } from "react-redux";
import { activeBook } from "../reducers/book_active";

class BookDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            // <div>{this.props.currentBook.name}</div>
            <div>aaaaa</div>
         )
    }
}
 
function mapStateToProp(state){
    return {
        currentBook: state.activeBook
    }
}

export default connect(mapStateToProp)(BookDetail);
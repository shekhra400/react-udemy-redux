import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.currentBook){
            return <div> Select a book to get started!!</div
        }
        return (
            <div>            
                <div>aaaaa</div>
                {/* <div>{this.props.currentBook.name}</div> */}
            </div>
            
         )
    }
}
 
function mapStateToProps(state){
    return {
        currentBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
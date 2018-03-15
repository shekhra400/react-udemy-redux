import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class BookList extends Component {

    constructor(props){
        super(props);
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.name}>{book.name}</li>
            );
        });
    }

    render(){
        return(
            <ul className="col-md-4 list-group">
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    return {
        books: state.books
    }
}


export default connect(mapStateToProps)(BookList);

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import from "../actions/select_book"

class BookList extends Component {

    constructor(props){
        super(props);
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.selectBook(book)} className="list-group-item" key={book.name}>{book.name}</li>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators( {selectBook:selectBook} ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

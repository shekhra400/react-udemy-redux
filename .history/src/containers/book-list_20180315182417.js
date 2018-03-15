import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectBook from "../actions/select_book";

class BookList extends Component {

    constructor(props){
        console.log('cccc');
        super(props);
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.selectBookFunc(book)} className="list-group-item" key={book.name}>{book.name}</li>
            );
        });
    }

    renderList2(){
        return this.props.copies.map((copy) => {
            return (
                <li  className="list-group-item" key={copy.name}>{copy.name}</li>
            );
        });
    }

    render(){
        console.log('render');
        return(
            <ul className="col-md-4 list-group">
                {this.renderList()}
                {this.renderList2()}
            </ul>
        )
    }

}

function mapStateToProps(state){
    console.log('mapStateToProps');
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    console.log('mapStateToProps');
    return bindActionCreators( {selectBookFunc: selectBook} ,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

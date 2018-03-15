import React, { Component } from "react";
import { connect } from "react-redux";

export default class BookList extends Component {

    constructor(props){
        super(props);
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item" key={book.title}>{book.title}</li>
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
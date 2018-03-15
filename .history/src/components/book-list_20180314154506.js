import React, { Component } from "react";

export default class BookList extends Component {

    constructor(props){
        super(props);
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item"></li>
            )
        })
    }

    render(){
        return(
            <ul className="col-md-4 list-group">
                {this.renderList()}
            </ul>
        )
    }

}
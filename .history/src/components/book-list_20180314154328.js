import React, { Component } from "react";

export default class BookList extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul className="col-md-4 list-group">
                {this.renderList()}
            </ul>
        )
    }

}
import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>Book Details</div>
         )
    }
}
 
export default connect(mapStateToProp)(BookDetail);
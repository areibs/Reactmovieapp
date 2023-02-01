import React from "react";
import Review from "./reviewForm";

export default class ReviewList extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }
    render() {
        return ( 
            <div className="container">                 
                <div>
                <Review reviews={this.state.reviews} />
                </div>                 
            </div>
        )
    }
}
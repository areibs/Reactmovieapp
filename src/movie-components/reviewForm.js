import React from "react";

export default class Review extends React.Component {
    constructor(props) { /*this is a place to hold the reviews of each film; props pass into superprops */
        super(props);
        this.state = {
            reviews: props.reviews
        } 
    }

    render() {
        let reviewsArray;
        if (this.state.reviews) {
            reviewsArray = this.state.reviews.map( (review, index) => 
            <li className="list-group-item" key={index}>{review}</li>
            ) /*this will build an array of reviews and list the reviews as they appear */ 
        }
        return (/*creates a card div where the user reviews will appear and returns the reviews array */
          <div className="card"> 
                <div className="card-header">
                   <h5> Reviews</h5>
                </div>
                {reviewsArray} 
                <div className="card-body">                    
                    <p className="card-text"></p>                     
                </div> 
            </div>         
        ); 
    }
}
      
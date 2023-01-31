import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReviewList from "./reviewList"; /*passing ReviewList and ReviewButton components to the Movie class */
import ReviewButton from "./review-button";

export default class Movie extends React.Component {
    constructor(props) { /*passing the movie props from the constructor into the superconstructor 
    so they can be reused in the component */
        super(props);
        this.state = { /*adding props to the state so the state will update correctly; state is 
        the current state of the data */
            title: props.title,
            image: props.image,
            plot: props.plot,
            reviews: props.reviews
        }
        this.setReviews = this.setReviews.bind(this) /*have to bind this to setReviews  */
    }
    
    setReviews(e) {
        let newReview = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
        this.setState( state => {
            if ( state.title === e.target.name ) { /*when a user adds a review it will be pushed 
            to the Review array */
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }

    render() {
        return( /*returning ReviewList and ReviewButton */ 
            <div>
                <div className="card mx-auto" style={{ width: "80%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">
                            <img src={this.state.image} alt="film image" /><br />{this.state.plot}</p>
                    </div>
                    <ReviewList reviews={this.state.reviews} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.title} />
                </div>
            </div>
        ) 
    }
}

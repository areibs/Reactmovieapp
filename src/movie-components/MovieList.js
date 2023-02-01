import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Movie from './movie';
import NavBar from './nav-bar';


export default class MovieList extends React.Component {
    render() {
        let movies = [ 
            {
                title: "Iron Man",
                image: "data:image/jpeg;base64,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",
                plot: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
                reviews: []
            }, 
            {
                title: "Captain America",
                image:  "data:image/jpeg;base64,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",
                plot: "It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.",            
                reviews: []
            },
            {
                title: "Black Panther",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtC0S4-yvJY4Oiq7LndAmIrBjzltTKvf_QEunmkUkFn52NAJ3PcGdfW2leiBAC-reWpg&usqp=CAU",
                plot: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.",
                reviews: [] 
            }
        ]

        let arr;
        arr = movies.map( (movies, index ) => 
            <Movie title={movies.title} plot={movies.plot} reviews={movies.reviews} image={movies.image} key={index} />
        ) 

        return (
            
            <div className="container">
                <div>
                    <NavBar />
                </div> <br /><br />
                
                <div>
                    {arr}
                </div>  
            </div>
       )
    } 
}


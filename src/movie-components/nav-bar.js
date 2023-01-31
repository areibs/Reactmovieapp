
/*This NavBar component will be added to the Movie-List container; there will not be links
just the website title. */
import React from "react";

export default class Navbar extends React.Component {
    render() { 
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav justify-content-center">    
                <a className="navbar-brand"><img className="filmReel" 
                src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556582040238-PTQ8EP4WMQH73IU2G7K7/image-asset.jpeg" height="300 px" alt="Marvel Movie Banner"/>&nbsp; &nbsp; <b>Marvel Movie Reviews</b></a>&nbsp;&nbsp;<img className="filmReel" 
                src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556582040238-PTQ8EP4WMQH73IU2G7K7/image-asset.jpeg" height="300 px" alt="Marvel Movie Banner"/>                         
            </nav>
        </div>        
        ); 
    } 
} 
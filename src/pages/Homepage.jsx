import React from "react"
import {Link} from 'react-router-dom';

const Homepage =()=>{

    return (
        <div className="home-wrapper">
            <Link to="/beers" className="home-element">
                <img src="../assets/beers.png" alt="beer" />
                <h3>All beers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur cumque consequatur beatae. Similique tenetur distinctio quod, fuga dicta quos?</p>
            </Link>
            <Link to="/random-beer" className="home-element">
                <img src="../assets/random-beer.png" alt="beer" />
                <h3>Random beer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur cumque consequatur beatae. Similique tenetur distinctio quod, fuga dicta quos?</p>

            </Link>
            <Link to="/new-beer" className="home-element">
                <img src="../assets/new-beer.png" alt="beer"  />
                <h3>New beer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur cumque consequatur beatae. Similique tenetur distinctio quod, fuga dicta quos?</p>

            </Link>
        </div>
    )
}

export default Homepage;
import {React, useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./Beers.css"

const Beers =()=>{

const [beers, setBeers]=useState(null)

useEffect(() => {
  fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      setBeers(response)
    })
    .catch((e) => console.error(e))
}, [])


if (!beers) {
  return <div className="Loading">Loading...</div>
}

    return (
        <ul className="beer-list">
        {beers.map(beer => {
            return (
                <li key={beer._id}>
                <Link to={`/beer/${beer._id}`}>
                    <img src={beer.image_url} alt={beer.name}/>
                    <div>
                        <h2>{beer.name}</h2>
                        <h4>{beer.tagline}</h4>
                        <small>{beer.contributed_by}</small>
                    </div>
                </Link>
                </li>
            )
        })}

        </ul>
    )
}

export default Beers;
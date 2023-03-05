import {React, useState, useEffect} from "react"
import OneBeerCard from "../components/OneBeerCard/OneBeerCard"

const Random =()=>{
    const[beer, setBeer] = useState(null)

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((rawResponse) => rawResponse.json())
          .then((response) => {
            setBeer(response)
          })
          .catch((e) => console.error(e))
      }, [])
    
      if (!beer) {
        return <div className="Loading">Loadingggg!</div>
      }
    return (
            <OneBeerCard beer={beer}/>
    )
}

export default Random;
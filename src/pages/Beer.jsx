import {React, useState, useEffect} from "react"
import {  useParams } from "react-router-dom"
import OneBeerCard from "../components/OneBeerCard/OneBeerCard"

const Beer =()=>{
    const[beer, setBeer] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
          .then((rawResponse) => rawResponse.json())
          .then((response) => {
            setBeer(response)
          })
          .catch((e) => console.error(e))
      }, [id])
    
      if (!beer) {
        return <div className="Loading">Loadingggg!</div>
      }
    return (
            <OneBeerCard beer={beer}/>
    )
}

export default Beer;
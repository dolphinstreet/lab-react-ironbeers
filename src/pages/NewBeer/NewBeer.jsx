import {React, useState} from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./NewBeer.css"

const NewBeer =()=>{
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewer_tips, setBrewerTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')
    const navigate = useNavigate()



    const handleSubmit = async (event) => {
        event.preventDefault()
        const beerToCreate = {
            name,
            tagline,
            description,
            first_brewed,
            brewer_tips,
            attenuation_level,
            contributed_by
        }
        try {
          await axios.post(
            'https://ih-beers-api2.herokuapp.com/beers/new',
            beerToCreate
          )
    
          navigate('/beers')
    
        } catch (error) {
          console.log(error)
        }
      }
    
    return (
        <section className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        type="text"
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="tagline">Tagline</label>
                    <input
                        onChange={(event) => setTagline(event.target.value)}
                        value={tagline}
                        type="text"
                        name="tagline"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                        type="textarea"
                        id="description"
                        name="description"
                    />
                </div>
                <div>
                    <label htmlFor="first_brewed">First brewed</label>
                    <input
                        onChange={(event) => setFirstBrewed(event.target.value)}
                        value={first_brewed}
                        type="text"
                        name="first_brewed"
                    />
                </div>
                <div>
                    <label htmlFor="brewer_tips">Brewer tips</label>
                    <input
                        onChange={(event) => setBrewerTips(event.target.value)}
                        value={brewer_tips}
                        type="text"
                        name="brewer_tips"
                    />
                </div>
                <div>
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input
                        onChange={(event) => setAttenuationLevel(event.target.value)}
                        value={attenuation_level}
                        type="number"
                        name="attenuation_level"
                        min={0}
                    />
                </div>
                <div>
                    <label htmlFor="contributed_by">Contributed by</label>
                    <input
                        onChange={(event) => setContributedBy(event.target.value)}
                        value={contributed_by}
                        type="text"
                        name="contributed_by"
                    />
                </div>
                
                <button>Create</button>
            </form>
        </section>
        )
}

export default NewBeer;


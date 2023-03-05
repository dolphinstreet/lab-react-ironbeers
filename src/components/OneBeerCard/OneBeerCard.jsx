import React from "react"
import "./OneBeerCard.css"

const OneBeerCard =({beer})=>{
    
    return (
        <section className="beer">
            <article className="one-beer-wrapper">
                <img src={beer.image_url} alt={beer.name} />
                <div className="one-beer-info">
                    <div className="one-beer-title">
                        <h1>{beer.name}</h1>
                        <h5>{beer.attenuation_level}</h5>
                    </div>
                    <div className="one-beer-sub">
                        <h5>{beer.tagline}</h5>
                        <small>{beer.first_brewed}</small>
                    </div>
                    <p>{beer.description}</p>
                    <small>{beer.contributed_by}</small>
                </div>
            </article>
        </section>
    )
}

export default OneBeerCard;



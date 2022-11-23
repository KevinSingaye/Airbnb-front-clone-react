import React from "react"
import Grid from '../public/assets/grid.png'

function Hero() {

    return (
        <>
        <div className="Grid">
            <img src={Grid} className="Gridpic" alt="Grid pictures"/>
        </div>

<div className="Herotext">
<h1> Online Experiences</h1>

<p> Join unique interactive activities led by <br>
</br>one of a kind hosts - all without leaving home</p>
    </div>
</>
    )
}

export default Hero
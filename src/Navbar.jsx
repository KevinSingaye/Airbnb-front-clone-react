import React from "react"
import AirBnblogo from '../public/assets/Airbnb_Logo_Bélo.png'

function Navbar() {
    return (
        <nav>
      
           <img src={AirBnblogo} className="Airbnb-logo" alt="AirBnbLogo" />
     
    </nav>
    )
}

export default Navbar
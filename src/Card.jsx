import React from "react"
import Ankur from './assets/ankur-warikoo.png'
import GrandCanyon from './assets/grand-canyon.png'
import JapanForest from './assets/japan-forest.png'
import MountainBike from './assets/mountain-bike.png'
import ScubaDiving from './assets/scuba-diving.png'
import StandUp from './assets/stand-up.png'
import Star from './assets/star-icon.png'

function Card () {
return (
<>
<div className="CardsContainer">

<div className="CardPic">
    
<img src={Ankur} className="AnkurPic" alt="Ankur Picture"/>
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
    <p> 5.0 <span>(6)- USA </span> </p>
    <p> Life lessons with Umar</p>
   <p> <strong> From $136 </strong> / person </p>
</div>
</div>

<div className="CardPic">
<img src={GrandCanyon} className="GrandCanyon" alt="Grand Canyon picture"/>
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
    <p> 5.0 <span>(6)- USA </span> </p>
    <p> Life lessons with Umar</p>
   <p> <strong> From $136 </strong> / person </p>
</div>
</div>

<div className="CardPic">
<img src={JapanForest} className="JapanForest" alt="Japan Forest picture"/>
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
    <p> 5.0 <span>(6)- USA </span> </p>
    <p> Life lessons with Umar</p>
   <p> <strong> From $136 </strong> / person </p>
</div>
</div>

<div className="CardPic">
<img src={MountainBike} className="MountainBike" alt="Mountain Bike picture"/>
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
    <p> 5.0 <span>(6)- USA </span> </p>
    <p> Life lessons with Umar</p>
   <p> <strong> From $136 </strong> / person </p>
</div>
</div>

<div className="CardPic">
<img src={ScubaDiving} className="ScubaDiving" alt="Scuba Diving picture"/>
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
    <p> 5.0 <span>(6)- USA </span> </p>
    <p> Life lessons with Umar</p>
   <p> <strong> From $136 </strong> / person </p>
</div>
</div>

<div className="CardPic">
<img src={StandUp} className="StandUp" alt="Stand Up picture"/>
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
    <p> 5.0 <span>(6)- USA </span> </p>
    <p> Life lessons with Umar</p>
   <p> <strong> From $136 </strong> / person </p>
</div>
</div>

</div>
</>
)

}

export default Card
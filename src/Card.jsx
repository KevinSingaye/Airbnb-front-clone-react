import React from "react"
import Star from './assets/star-icon.png'

function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
return (

<div className="CardContainers">

<div className="CardContainer">  
{badgeText && <div className="card-badge">{badgeText}</div>}
<img className="cardPicImg" src={`src/assets/${props.coverImg}`} />
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
   <p>{props.stats.rating}</p>
      <span> ({props.stats.reviewCount})• </span> 
       <span> {props.location} </span>
    <p> {props.title}</p>
   <p> <strong> From ${props.price} </strong> / person </p>
   
</div>
</div>
</div>)

}

export default Card
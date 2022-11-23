import React from "react"
import Star from '../public/assets/star-icon.png'

function Card (props) {
return (

<div className="CardContainers">

<div className="CardContainer">  
<img className="cardPicImg" src={`../public/assets/${props.coverImg}`} />
<div className="PicText">
    <img src={Star}className="Star" alt="StarIcon"/>
   <p>{props.rating}</p>
      <span> ({props.reviewCount})• </span> 
       <span> {props.location} </span>
    <p> {props.title}</p>
   <p> <strong> From ${props.price} </strong> / person </p>
</div>
</div>
</div>)

}

export default Card
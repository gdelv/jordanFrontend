import React from 'react'



const ItemCard = (props) => {
    return (
    <>
        <img className={props.className} src={props.image}></img>
        <h4>{props.item}</h4>
        <p>{props.price}</p>
    </>
    )
}



export default ItemCard

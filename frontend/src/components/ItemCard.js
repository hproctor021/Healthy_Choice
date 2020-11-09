import React from 'react';


const ItemCard = (props) => {
    
    return(
        <div className="card">
            <h2>{props.item.name}</h2>
            <img src={props.item.image}/>
            
            
        </div>
    )
}
export default ItemCard;
import React from 'react';


const ListCard = (props) => {
    
    return(
        <div>
            <h5 className="card-title"> {props.listItem.item.name} - {props.listItem.item.price} </h5>
            
            
        </div>
    )
}
export default ListCard;
import React from 'react';


const ListCard = (props) => {
    
    return(
        <div>
            <p className="card-title"> <strong>{props.listItem.item.name} - {props.listItem.item.price}</strong> <button onClick={(e)=>{props.removeItem(props.listItem)}} type='button' class='btn-warning btn-circle'><i class='fa fa-times'><strong>X</strong></i></button></p> 
            
            
            
        </div>
    )
}
export default ListCard;
import React from 'react';
import { Card, Button } from 'react-bootstrap'


const ListCard = (props) => {
    
    return(
        <div>
            <h6> {props.listItem.item.name}  -  ${props.listItem.item.price}
                <Button variant="primary"><small> X </small> </Button>
            </h6>
        </div>
    )
}
export default ListCard;




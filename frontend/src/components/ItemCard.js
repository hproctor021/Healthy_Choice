import React from 'react';
import { Card } from 'react-bootstrap'


const ItemCard = ({ item }) => {
    
    return(
        // <div className='card'>
        //     <img src={item.image} />
        //     <h4>{item.name}</h4>
        //     <h5>${item.price}</h5>
        //     <p>{item.calories} Calories per Serving</p>

            
        // </div>


        <div>
             <Card className='card'>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    ${item.price}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{item.calories} calories per serving</small>
                </Card.Footer>
            </Card>
        </div>

        // <div>
        //     <div class="row float-left">
        //         <div class="col">
        //             <img src={item.image} />
        //         </div>
        //     </div>
        //     <div class="row" style="text-align: center">
        //         <div class="col float-right">
        //             <h1 class="display-4 text-primary" style="text-align: center"> {item.name} </h1> 
        //             <p> {item.calories}</p> 
        //             <strong>{item.price}</strong>
        //         </div>
        //     </div>
        // </div>
    )
}
export default ItemCard;
import React from 'react';
import { Card, Button, Container} from 'react-bootstrap'


const ItemCard = ({ item, addItem }) => {
    
    return(
      


        <Card className='m-3' style={{ width: '18rem', height: '30rem' }}>
              <Card.Img variant='top' src={item.image} />
              <Card.Body>
                <Card.Title>${item.price}</Card.Title>
                {/* <Link to={`/products/${product.id}`}>Product</Link> */}
                
                    {item.name}<br/>
                    <small className="text-muted">{item.calories} calories per serving</small>

                 <Button onClick={(e)=>addItem({item})} variant="outline-primary">Add to Shopping List</Button>               
                 
                </Card.Body>
            </Card>

        
            
     

    )
}
export default ItemCard;
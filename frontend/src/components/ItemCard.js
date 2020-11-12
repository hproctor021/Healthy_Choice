import React from 'react';
import { Card, Button, Container} from 'react-bootstrap'


const ItemCard = ({ item }) => {
    
    return(
      


        <Card className='m-3' style={{ width: '18rem', height: '30rem' }}>
              <Card.Img variant='top' src={item.image} />
              <Card.Body>
                <Card.Title>${item.price}</Card.Title>
                {/* <Link to={`/products/${product.id}`}>Product</Link> */}
                
                    {item.name}<br/>
                    <small className="text-muted">{item.calories} calories per serving</small>

                 <Button variant="outline-primary">Add to Shopping List</Button>               
                 
 
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">{item.calories} calories per serving</small>
                </Card.Footer> */}
            </Card>

        
            //  <Card className='m-3' >
            //     <Card.Img variant="top" src={item.image} className='image-avatar'/>
            //     <Card.Body>
            //     <Card.Title as='div'>${item.price}</Card.Title>
            //     <Card.Text as='h3'>
            //         {item.name}
            //     <Button variant="outline-primary">Add to Shopping List</Button>
                    
            //     </Card.Text>
            //     </Card.Body>
            //     <Card.Footer>
            //     <small className="text-muted">{item.calories} calories per serving</small>
            //     </Card.Footer>
            // </Card>
            
     

    )
}
export default ItemCard;
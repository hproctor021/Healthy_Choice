import React from 'react';
import { Card, Button } from 'react-bootstrap'
import BlankHeader from './BlankHeader'
import { useHistory } from 'react-router'

const CheckOut = (props) => {
    
    const history = useHistory();

    const processOrder = () => {
        console.log('purchase made')
        alert("Your order was made successfully!")
        history.push({
            pathname: '/'
        })
        
    }
    
    return(
        <div>
            <BlankHeader />
            <center>
            <Card style={{ width: '20rem', height: '27rem'}}>
                
                <Card.Body>
                <h3>Thank you for shopping Healthy Choice! </h3>
                
                <br/><br/>
                <Button onClick={processOrder} type='submit' variant='success'><strong>Process Order</strong></Button>
                </Card.Body><br/><br/><br/><br/>
                <Card.Footer>
                    <muted><small>Click to process payment and place your order</small></muted> <br/>
                </Card.Footer>
            </Card>
            </center>
        </div>
    )
}
export default CheckOut;
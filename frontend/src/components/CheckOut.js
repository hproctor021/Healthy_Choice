import React from 'react';
import { Card, Button } from 'react-bootstrap'


const CheckOut = (props) => {
    
    // const history = useHistory();

    const processOrder = () => {
        console.log('purchase made')
       
        // return <Card>
        //     <Card.Body>
        //         <h2>Your purchase was successful!</h2>
        //         <h6><muted>Log back in to continue shopping:</muted></h6>
        //         <Button>Login</Button>
        //     </Card.Body>
        // </Card>

    }
    return(
        <center>
        <Card style={{ width: '20rem'}}>
            
            <Card.Body>
             <h2>Your total is:
                 <h3>${props.total}</h3>
             </h2>
             <br/><br/>
             <Button onClick={processOrder} type='submit' variant='success'><strong>Process Order</strong></Button>
             </Card.Body><br/><br/><br/><br/>
             <Card.Footer>
                <muted><small>Click to process payment and place your order</small></muted> <br/>
             </Card.Footer>
        </Card>
        </center>
    )
}
export default CheckOut;
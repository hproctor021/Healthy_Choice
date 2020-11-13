import React from 'react';
import ListCard from './ListCard';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'



class ShoppingList extends React.Component {


    state ={
        total: '',
        checkout: []
    }

   
    // add the total price 
    totalPrice=()=>{
        let total = 0
        this.props.shoppingList.map(item => {
        total = total+ item.item.price
        })
        total=total.toFixed(2) //set it for only 2
        return total  
    }

    checkOut = () =>{
        console.log("pay the money")
        // include State - total to pass to checkout component ** move this function to App.js
        this.props.history.push({
            pathname: '/checkout'
        });
    }


    render(){
        return(
            <div>
                <h3>Shopping List:</h3>
                {this.props.shoppingList.map((listItem)=>{
                return(
                    
                    <ListCard listItem={listItem} 
                    removeItem ={this.props.removeItem}/>
                    )
                })}

                <h6>Total price:  ${this.totalPrice()}</h6>

               {/* <form onSubmit={this.checkOut}><Button type='submit' variant='success'><strong>Check Out</strong></Button></form> */}
               <Button onClick={this.checkOut} type='submit' variant='success'><strong>Proceed to Check Out</strong></Button>

            </div>
        )
    }
}

export default withRouter(ShoppingList);
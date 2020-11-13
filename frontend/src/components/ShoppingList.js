import React from 'react';
import ListCard from './ListCard';
import { Button } from 'react-bootstrap';



class ShoppingList extends React.Component {
    // let history = useHistory();
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
        // history.push({
        //     pathname: '/checkout'
        // })
      
    }


    render(){
        return(
            <div>
                <h3>Shopping List</h3>
                {this.props.shoppingList.map((listItem)=>{
                return(
                    
                    <ListCard listItem={listItem} 
                    removeItem ={this.props.removeItem}/>
                    )
                })}

                <h6>Total price:{this.totalPrice()}</h6>
               {/* <form onSubmit={this.checkOut}><Button type='submit' variant='success'><strong>Check Out</strong></Button></form> */}
               <Button onClick={this.checkOut} type='submit' variant='success'><strong>Check Out</strong></Button>

            </div>
        )
    }
}

export default ShoppingList;
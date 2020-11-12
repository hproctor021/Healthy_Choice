import React from 'react';
import ListCard from './ListCard';


class ShoppingList extends React.Component {

    state ={
        total: ''
    }

    // let eachListCard =

    totalPrice=()=>{
        console.log('spending money')
        // let totalPrice = this.state.total + this.
        // this.setState({
        //     tota
        // })
    }

    render(){
        return(
            <div>
                <h3>Shopping List</h3>
                {this.props.shoppingList.map((listItem)=>{
                return(
                    
                    <ListCard listItem={listItem} />
                    )
                })}
                <h6>total price:{this.totalPrice()}</h6>
            </div>
        )
    }
}

export default ShoppingList;
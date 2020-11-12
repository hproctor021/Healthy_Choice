import React from 'react';
import ListCard from './ListCard';


class ShoppingList extends React.Component {
    render(){
        return(
            <div>
                <h3>Shopping List</h3>
                <ListCard />
            </div>
        )
    }
}

export default ShoppingList;
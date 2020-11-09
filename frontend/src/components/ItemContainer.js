import React, { Component } from 'react';
import ItemCard from './ItemCard'


class ItemContainer extends Component {
    render(){
        return(
            <div>
                <h2>Items</h2>

                {this.props.items.map((item) => {
                    return(
                        <ItemCard item={item} />

                    )
                })}
            </div>
        )
    }
}

export default ItemContainer;
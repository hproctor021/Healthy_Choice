import React, { Component } from 'react';
import Header from './Header'
import ItemContainer from './ItemContainer'


let itemURL = 'http://localhost:3000/items'

class ShoppingPage extends Component {


    state = {
        items: [],
        searchValue: '',
        shoppingList: []

    }

    componentDidMount(){
      console.log('content loaded')
      fetch(itemURL)
      .then(res=> res.json())
      .then(items => {
          this.setState({
              items
          })
      })
    }

    handleSearch =(e) => {
        console.log(e.target.value)
        let searchValue = e.target.value
        this.setState({
            searchValue: searchValue
        })
    }

    displaySearch =(e) => {
        let displayItem = this.state.items.filter(item => item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return displayItem
    }

    addItem = (listCard) => {
        console.log("add me in")
        this.setState({
            shoppingList: [...this.state.shoppingList, listCard]
        })
    }


    

    render(){
        return(
            <div>
                <Header handleSearch={this.handleSearch}
                shoppingList={this.state.shoppingList}
                />
                


                <ItemContainer items={this.displaySearch()}
                addItem={this.addItem}
                />
            </div>
        )
    }
}

export default ShoppingPage;
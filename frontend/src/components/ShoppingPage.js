import React, { Component } from 'react';
import Header from './Header'
import ItemContainer from './ItemContainer'


let itemURL = 'http://localhost:3000/items'

class ShoppingPage extends Component {


    state = {
        items: [],
        filter: "",
        clicked:""
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


    render(){
        return(
            <div>
                <Header />

                <ItemContainer items={this.state.items}/>
            </div>
        )
    }
}

export default ShoppingPage;
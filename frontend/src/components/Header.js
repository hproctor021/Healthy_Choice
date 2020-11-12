import React, { Component } from 'react';
import Search from './Search';
import User from './User'
import ShoppingList from './ShoppingList';

class Header extends Component {

  state = {
    display:false,
}

  handleClick = () => {
    console.log("you can see me ")
    let newBoolean = !this.state.display
    this.setState({
        display: newBoolean
    })
}


  render() {
    return (
      <div>
        <h1 className="text-center">Healthy Choice</h1>
        <Search />


        <User />

        
        { this.state.display
                    ?
                    <ShoppingList/>
                    :
                    null
        }
        <button onClick={() => this.handleClick()}>show the List</button>
      </div>
    );
  }

}

export default Header;
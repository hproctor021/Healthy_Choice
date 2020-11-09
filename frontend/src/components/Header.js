import React, { Component } from 'react';
import Search from './Search';
import User from './User'
import ShoppingList from './ShoppingList';

class Header extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center">Healthy Choice</h1>
        <Search />

        <User />

        <ShoppingList />
      </div>
    );
  }

}

export default Header;
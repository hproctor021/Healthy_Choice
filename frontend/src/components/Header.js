import React, { Component } from 'react';
import Search from './Search';
// import User from './User'
import ShoppingList from './ShoppingList';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';

class Header extends Component {

  state = {

    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render() {
    return (
    
        <div>
          <header>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Healthy Choice</Navbar.Brand>
            <Nav className="mr-auto">

            <LinkContainer to='/UserUpdateForm'>
            <Nav.Link>Update Account</Nav.Link>
            </LinkContainer>
            </Nav>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={() => this.handleClick()} variant="outline-primary">Shopping List</Button>
            </Form>
          </Navbar>

          <Search />

          {/* <User /> */}


          { this.state.display
            ? <ShoppingList />
            : null
          }
          </header>
        </div>
    

    );
  }

}

export default Header;
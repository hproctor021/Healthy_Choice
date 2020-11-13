import React, { Component } from 'react';
import Search from './Search';
// import User from './User'
import ShoppingList from './ShoppingList';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';

let userURL = 'http://localhost:3000/users'

class Header extends Component {

  state = {
    users: [],
    display: false,
    shoppingList: "",
    loginUser: ""
  }

  componentDidMount(){
    fetch(userURL)
    .then(res =>res.json())
    .then(users => {
      this.setState({
        users
      })
    })
  } 

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  // updateUser = () => {

  //   let currentUser = this.state.users.filter((user => user.id === ))
  //   this.setState({
  //     loginUser: this.state.users.filter(( ))
  //   })

  // }
  

  render() {
    return (
    
        <div>
          <header>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Healthy Choice</Navbar.Brand>
            <Nav className="mr-auto">

            <LinkContainer to='/UpdateUser/id'>
            <Nav.Link>Update Account</Nav.Link>
            </LinkContainer>
            </Nav>

            <Form inline>
              <FormControl onChange={(e)=> this.props.handleSearch(e)} type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={() => this.handleClick()} variant="outline-primary">Shopping List</Button>
            </Form>
          </Navbar>

          <Search handleSearch={this.props.handleSearch}/>

          {/* <User /> */}


          { this.state.display
            ? <ShoppingList shoppingList={this.props.shoppingList} removeItem={this.props.removeItem}/>
            : null
          }
          </header>
        </div>
    

    );
  }

}

export default Header;
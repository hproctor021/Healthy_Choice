import React, { Component } from 'react';
import './App.css'
import LoginPage from './components/LoginPage'
import ShoppingPage from './components/ShoppingPage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import UserUpdateForm from './components/UserUpdateForm'
import CheckOut from './components/CheckOut'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'


class App extends Component {
   
  state = {
    total: ''
  }

  // state of total
  // pull function from shopping list , 
  // --> we set state 
  // in App & pass down to Checkout Component
  // and shopping list component



    render() {
        return (
          <Router>
          <Container className='mainContainer' style={{minHeight: '90vh'}}>
            

              <Route 
                exact 
                path='/'
                render={routeProps =>
                <LoginPage 
                {...routeProps}/>
                } 
              />

            <Route 
<<<<<<< HEAD
              exact 
              path='/Signup'
              render={routeProps =>
              <SignupForm 
              {...routeProps}/>
              } 
            />
            <Route 
              exact 
              path='/UpdateUser/id'
              render={routeProps =>
              <UserUpdateForm
              {...routeProps}/>
              } 
            />
=======
                exact 
                path='/Login'
                render={routeProps =>
                <LoginForm 
                {...routeProps}/>
                } 
              />
>>>>>>> main

              <Route 
                exact 
                path='/Signup'
                render={routeProps =>
                <SignupForm 
                {...routeProps}/>
                } 
              />

              <Route 
                exact 
                path='/UpdateUser/id'
                render={routeProps =>
                <UserUpdateForm
                {...routeProps}/>
                } 
              />
              <Route 
                exact 
                path='/checkout'
                render={routeProps =>
                <CheckOut 
                {...routeProps}/>
                } 
              />
              <Route exact path='/grocery' component={ShoppingPage} />
          </Container>
          <Footer />
          </Router>
        )
    }
}

export default App;
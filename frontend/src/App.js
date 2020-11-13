import React, { Component } from 'react';
import './App.css'
import LoginPage from './components/LoginPage'
import ShoppingPage from './components/ShoppingPage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import UserUpdateForm from './components/UserUpdateForm'
import Header from './components/Header'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import CheckOut from './components/CheckOut'




class App extends Component {
   

  // state of total
  // pull function from shopping list , 
  // pass back into shopping list component --> this to set state 
  // in App & pass state to Checkout Component


    render() {
        return (
          <Router>
            {/* <Header /> */}

            <Route 
              exact 
              path='/'
              render={routeProps =>
              <LoginPage 
              {...routeProps}/>
              } 
            />

          <Route 
              exact 
              path='/Login'
              render={routeProps =>
              <LoginForm 
              {...routeProps}/>
              } 
            />

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

          </Router>    
        )
    }
}

export default App;
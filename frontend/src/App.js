import React, { Component } from 'react';
import './App.css'
import LoginPage from './components/LoginPage'
import ShoppingPage from './components/ShoppingPage'

// // import {BrowserRouter as Router , Route} from 'react-router-dom'




class App extends Component {

   

    render() {
        return (
                <div>
                   <LoginPage />

                   <ShoppingPage />
                </div>
        )
    }
}

export default App;

import React, { Component } from 'react';
import Header from './Header'
import ItemContainer from './ItemContainer'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'


let itemURL = 'http://localhost:3000/items'

class App extends Component {

    state = {
        items: []

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

    render() {
        return (
            // <BrowserRouter>
                <div>
                    <Header />
                    {/* <Route path='/items' component={ItemsDisplay}/> */}

                    <ItemContainer />
                    {/* do we put the form route in the User component??
                    <Route path=`/users/${id}/form` component={UserForm} /> */}
                </div>
            // </BrowserRouter>
        )
    }
}

export default App;
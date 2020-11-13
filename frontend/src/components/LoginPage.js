import React, { Component } from 'react';
import { Button, Nav, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import BlankHeader from './BlankHeader'


let userURL = 'http://localhost:300/users'


class LoginPage extends Component {

    state = {
        loggedinUser: ""
    }

    componentDidMount(){
        fetch(userURL)
        .then(res=> res.json())
        .then(loggedinUser => {
            this.setState({
                loggedinUser
            })
        })
    }

    addUser = (newUser) => {

        fetch(URL, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        .then(res=>res.json())
        .then(newUser => {
            this.state.loggedinUser(newUser)
            this.props.history.push('/grocery')
            this.setState({
                users: [...this.state.users, newUser]
            })
        })
    }

    render() {

        return(

                
                <center>
                <div>
                    <BlankHeader />
                   
                    <Card border="secondary" style={{ width: '18rem'}}>
                        <br></br>
                        <Card.Title as='h3'>Sign in to start shopping!</Card.Title>
                        <Card.Body>
                        <LinkContainer to={'/Login'}>
                            <Nav.Link>
                            <Button variant="outline-primary">Login</Button>
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/Signup'}>
                            <Nav.Link>
                            <Button variant="outline-primary">Signup</Button>
                            </Nav.Link>
                        </LinkContainer>
                        </Card.Body>
                    </Card>

                </div>
                </center>
          
        )
    }
}

export default LoginPage;
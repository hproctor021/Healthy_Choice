import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import BlankHeader from './BlankHeader'



let userURL = 'http://localhost:3000/users'


class LoginForm extends Component {

    state = {
        name: "",
        password: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
            fetch(userURL, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: this.state.name,
                    password: this.state.password
                }),
            })
            .then(res=>res.json())
            .then(newUser => {
                this.props.history.push('/grocery')
                
            })
        
    }



    render(){
        return(
            <div>
                <BlankHeader />
                <center>
                <Card border="secondary" style={{ width: '18rem' }}>
                <br></br>
                    <Card.Title as='h3'>Login</Card.Title>
                    <Card.Body>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control 
                                type="name" 
                                name='name'
                                placeholder="Enter Full Name" 
                                onChange={this.handleChange} 
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name='password'  
                                onChange={this.handleChange}
                                required />
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit"
                            onSubmit={this.handleSubmit}>
                            Submit
                        </Button>
                        
                    </Form>
                        
                    </Card.Body>
                </Card>
                </center>
            </div>
        )
    }
}

export default LoginForm;
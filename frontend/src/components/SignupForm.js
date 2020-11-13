import React, { useState } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { useHistory } from "react-router";
import BlankHeader from './BlankHeader'




export default function SignUpForm() {

    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
  

    const handleSubmit = (e) => {
      console.log(`
        Name: ${name}
        Email: ${email}
        Password: ${password}
        Phone Number: ${phone_number}
      `);

        e.preventDefault();
        history.push({
            pathname: '/grocery'
        })
       

    }


        return(
             <div>
                 <BlankHeader />
                <center>
                <Card border="secondary" style={{ height: '34rem', width: '27rem'}}>

                    <Card.Title as='h3'>Create an Account</Card.Title>
                    <Card.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control 
                                type="name" 
                                name='name'
                                placeholder="Enter Full Name" 
                                onChange={e => setName(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email" 
                                name='email'
                                placeholder="Enter Email" 
                                onChange={e => setEmail(e.target.value)} 
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name='password'  
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control 
                                type="phone_number" 
                                name='phone_number'
                                placeholder="Enter Phone Number" 
                                onChange={e => setPhoneNumber(e.target.value)}
                                required />
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit"
                            onSubmit={handleSubmit}>
                            Submit
                        </Button>
                        
                    </Form>
                        
                    </Card.Body>
                </Card>
                </center>
                </div>

        )
}
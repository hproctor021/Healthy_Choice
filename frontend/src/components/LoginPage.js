import React, { Component } from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


class LoginPage extends Component {

    render(){
        return(
            <div>
                <LoginForm />

                <SignupForm />
            </div>
        )
    }
}

export default LoginPage;
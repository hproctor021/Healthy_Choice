import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';


class BlankHeader extends Component {

    render(){


        return(

        <div>
            <header>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Healthy Choice</Navbar.Brand>
            </Navbar>
            </header>
        </div>


        )
    }
}

export default BlankHeader;
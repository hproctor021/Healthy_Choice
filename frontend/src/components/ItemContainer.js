import React, { Component } from 'react';
import ItemCard from './ItemCard'
import { Col, Row } from 'react-bootstrap'



class ItemContainer extends Component {
    render(){
        return(
            <div>
                <Row>
                {this.props.items.map(item => (
                    <Col sm={12} md={6} lg={4} xl={3}><ItemCard 
                    item={item} /></Col>
                 ) )}
                </Row>
            </div>
        )
    }
}

export default ItemContainer;
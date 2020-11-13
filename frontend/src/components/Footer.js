import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>&copy; Healthy Choice <small><a href= "https://www.linkedin.com/in/haley-proctor/"> Haley Proctor</a>
       &  <a href="https://www.linkedin.com/in/yu-hao-lai-a2385482/"> Tom Yu-Hao Lai</a></small></Col>
         
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;


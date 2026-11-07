import React from 'react';
// import  Container  from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark p-5">
        <Row className="text-center">
          <Col>
           &copy;Copy all reserved. || Made by <a href="">Harwin</a>
          </Col>
        </Row>
    </Container>
  );
};

export default Footer

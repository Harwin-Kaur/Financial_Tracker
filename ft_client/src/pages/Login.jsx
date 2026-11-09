import React from 'react';
import { Container, Row, Col } from 'react';
import { SignupForm } from '../components/SignupForm';

const Login = () => {
    return <Container className="p-5">
        <Row className= "bg-dark mt-5 p-5 rounded">
            <Col md={6}>
                <div className= 'd-flex flex-column justify-content-center' style={{height: '100%'}}> </div>
            </Col>
            <Col md={6}><SignupForm />{""}</Col>
        </Row>
    </Container>
};

export default Login;
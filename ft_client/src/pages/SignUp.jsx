import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FinancialTips from '../components/FinancialTips';    
import SignupForm from '../components/SignupForm';

const signup = () => {
    return (
    <Container className="p-5">
        <Row className= "bg-dark mt-5 p-5 rounded">
            <Col md={6}>
                <FinancialTips />{" "}
            </Col>
            <Col><SignupForm />{""}</Col>
        </Row>
    </Container>
    )
};

export default signup;
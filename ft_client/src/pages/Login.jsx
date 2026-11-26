import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  SignInForm  from '../components/SignInForm';
import { BsGraphDown } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { useUser } from '../context/userContext';


const Login = () => {

    // const {user, setUser} = useUser();
    // console.log(data);

    return <Container className="p-5">
        <Row className= "bg-dark mt-5 p-5 rounded">
            <Col md={6}><SignInForm />{""}</Col>

            <Col md={6}>
                <div className= 'd-flex flex-column justify-content-center fs-1' style={{height: '100%'}}> 

                    <div className="text-danger text-decoration-line-through">{" "} <BsGraphDown /> Reduce Your Enxpenses</div>
                    <div className="text-success">{" "} <BsGraphUp /> Increase Your Income</div>
                    
                </div> 
            </Col>
        </Row>
    </Container>
};

export default Login;
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    // navigate back to home page after submitting form
    const signupSubmit = () => {
        navigate('/')
    }

    return (
        <div className="signup-page page">
            <div className="signup-form form">
                <div className="form-header">
                    <h1>
                        Sign Up
                    </h1>
                    <p>It's quick and easy</p>
                </div>
                <Form onSubmit={signupSubmit}>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>

        </div>
    );
}

export default SignUp;

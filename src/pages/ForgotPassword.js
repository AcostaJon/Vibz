import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate();
    // navigate back to home page after submitting form
    const signupSubmit = () => {
        navigate('/')
    }
    return (
        <div className="forgotpassword-page page">
            <div className="resetpassword-form form">
                <h1>Reset</h1>
                <Form onSubmit={signupSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Reset
                    </Button>
                </Form>

            </div>

        </div>
    );
}

export default ForgotPassword;

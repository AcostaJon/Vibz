import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Link } from "react-router-dom";


function LoginForm() {
    return (
        <div className="login-form">
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Link to={'user-dashboard'}>
                    <Button variant="warning" type="submit">
                        Login
                    </Button>
                </Link>


                <Link to={'forgot-password'} >
                    Forgot Password?
                </Link>

                <p>or</p>

                <FormGroup >
                    <Link to={'signup'} >
                        <Button className="create-new" variant="success" type="submit">
                            Create New Account
                        </Button>
                    </Link>


                </FormGroup>

            </Form>
        </div>
    );
}

export default LoginForm;

import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/LoginStyle.css";

const LoginForm = () => {
  return (
    <div className="FormBox">
      <Form className="loginBox">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="btn-container">
          <Button className="mr-2" variant="danger" type="submit">
            Submit
          </Button>

          <Button variant="danger" type="button">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;

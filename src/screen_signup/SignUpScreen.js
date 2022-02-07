import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SignUpScreen() {
  const emailRef = useRef();
  const passowrdRef = useRef();
  const passowrdConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passowrdRef.current.value !== passowrdConfirmRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passowrdRef.current.value);
    } catch (error) {
      console.log(error);
      setError("failed to create an accoutn");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mb-3" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" ref={passowrdRef} required />
            </Form.Group>
            <Form.Group className="mb-3" id="passwordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Password" ref={passowrdConfirmRef} required />
            </Form.Group>
            <Button type="submit" className="mt-4" disabled={loading}>
              SignUp
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default SignUpScreen;

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginScreen() {
  const { login } = useAuth();
  const Navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      Navigate("/");
    } catch (e) {
      console.log(e);
      setError("failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" ref={emailRef} />
              {/* <Form.Text></Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
              {/* <Form.Text></Form.Text> */}
            </Form.Group>
            <Button type="submit" className="mt-4" disabled={loading}>
              LogIn
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/password-reset">Forgot Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Dont have an account? <Link to="/signup">Signup</Link>
      </div>
    </>
  );
}

export default LoginScreen;

import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { logout } = useAuth();
  const Navigate = useNavigate();

  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  async function handleLogout(e) {
    e.preventDefault();

    try {
      setError("");
      await logout();
      Navigate("/login");
    } catch (error) {
      setError("cannot logout");
      console.log(error);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
}

export default Dashboard;

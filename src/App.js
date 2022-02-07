import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./dashboard_screen/Dashboard";
import SignUpScreen from "./screen_signup/SignUpScreen";
import LoginScreen from "./screen_login/LoginScreen";
import UpdateProfile from "./screen_update_profile/UpdateProfile";
import PasswordReset from "./screen_password_reset/ForgotPassword";
import PrivateRoute from "./PrivateRoute";

// Import the functions you need from the SDKs you need

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<SignUpScreen></SignUpScreen>} />
              <Route path="/login" element={<LoginScreen></LoginScreen>} />
              <Route
                path="/password-reset"
                element={<PasswordReset></PasswordReset>}
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Login.css";
import color from "../../config/colors";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token["mytoken"] && token["mytoken"] !== "undefined") {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const resp = await APIService.loginUser({ username, password });
      setToken("mytoken", resp.token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid login credentials. Please try again.");
      setOpenModal(true); // Open modal on error
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      await APIService.registerUser({ username, email, password });
      await handleLogin();
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Username or email is already taken. Please choose another."
      );
      setOpenModal(true); // Open modal on error
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and Password are required.");
      setOpenModal(true); // Open modal on error
      return false;
    }
    if (!isLogin && email.trim() === "") {
      setErrorMessage("Email is required for registration.");
      setOpenModal(true); // Open modal on error
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-heading">
          <h1>{isLogin ? "Login" : "Register"}</h1>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            style={styles.button}
            type="button"
            className="btn btn  btn-block text-white"
            onClick={isLogin ? handleLogin : handleRegister}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : isLogin ? "Login" : "Register"}
          </button>
          <p className="toggle-login">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setLogin(!isLogin)} className="toggle-link">
              {isLogin ? "Register here" : "Login here"}
            </span>
          </p>
        </form>
      </div>

      {/* Modal for displaying errors */}
      <Modal open={openModal} onClose={closeModal} center>
        <div className="modal-content">
          <h2>Error</h2>
          <p>{errorMessage}</p>
          <button className="btn btn-danger" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: color.blue,
  },
};

export default Login;

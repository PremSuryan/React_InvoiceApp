import React, { useState } from 'react';
import axios from 'axios';
import Register from './registor'; // Corrected import statement
import { useHistory } from 'react-router-dom';
// import '../sass/components'; // Import custom CSS

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showReg, setShowReg] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const logurl = "http://localhost:5000/getusers";

  const userLog = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(logurl, { username, password });
      console.log("Login successful", response.data);
      setError('');
      setIsLoggedIn(true);
      history.push('/main');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userLogin = () => {
    setShowReg(true);
  };

  return (
    <div align="center">
      {!isLoggedIn && (
        <>
          {!showReg && <h2 style={{ textAlign: "center", color: "Blue" }}>Login</h2>}
          {error && <p>{error}</p>}
          {!showReg && (
            <form className="was-validated container container-sm-border" onSubmit={userLog}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <br />
              <div className="password-container">
                <label htmlFor="password">Password:</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </span>
              </div>
              <br />
              <div>
                <button type="submit" style={{ textAlign: "center", color: "Blue" }} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          )}
          <div>
            {!showReg && (
              <button className="btn btn-primary" style={{ textAlign: "center", color: "blue" }} onClick={userLogin}>
                Register
              </button>
            )}
          </div>
        </>
      )}
      {showReg && <Register />}
    </div>
  );
};

export default LoginPage;

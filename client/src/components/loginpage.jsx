import React, { useState } from 'react';
import axios from 'axios';
import Register from './registor'; // Corrected import statement
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showReg, setShowReg] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable for login status
  const history = useHistory();

  const logurl = "http://localhost:5000/getusers";

  const userLog = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(logurl, { username, password });
  
      if (response.status === 200) {
        console.log("Login successful", response.data);
        setError('');
        setIsLoggedIn(true); // Set login status to true
        history.push('/main');
      } else {
        setError('Invalid username or password');
      }
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
                  value={username} // Corrected to use username state
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <br />
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password} // Corrected to use password state
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
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

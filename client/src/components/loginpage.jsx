import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Register from './registor'; // Corrected import statement
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showReg, setShowReg] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  //   axios.post("http://localhost:5000/getUsers",{username,password})
  //     .then(response => setUserData(response.data))
  //     .catch(err => console.log(err));
  // }, []);

  const logurl = "http://localhost:5000/getusers"

  const userLog = async (event) => {
    event.preventDefault();
  // const uservariable = {username, password}

    try {
      const response = await axios.post(logurl, {username, password});
      // setUserData(response.data)
      console.log("login successful",response.data);
      setError('');
      history.push('/main'); 

      // const user = userData.find(user => user.username === username && user.password === password);
      // if (user) {
      //   console.log("login successful:", user);
      //   // Handle success (e.g., redirect to a protected route)
      // }
    }
     catch (error) {
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
    setShowReg(true); // Toggling the state to show/hide Register component
  };

  return (
    <div align="center">
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
              value={userData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <br/>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <br />
          <div>
            <button type="submit" style={{ textAlign: "center", color: "Blue" }} className="btn btn-primary" >
              Login
            </button>
            {/* <Link to='/main'></Link> */}
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
      {showReg && <Register />}
    </div>
  );
};

export default LoginPage;

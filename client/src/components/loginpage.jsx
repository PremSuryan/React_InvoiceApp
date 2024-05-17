import {  useState,  } from 'react';
import Register from './registor'; // Corrected import statement
import useData from "../context/login_context";

// import { Link } from 'react-router-dom';

// export var showreg = false;

// export var setshowreg = (value) => {
//   showreg = value;
// }

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showreg, setshowreg] = useState(false);
  const userDetails = useData();

  
  // console.log("LoginProvider", LoginProvider);
  // const [userregister, setUserRegister] = useContext(LoginContext);    --------  

  // const [showRegister, setShowRegister] = useState(false); // State to control whether to show Register component
  // const {userregister} = useContext(LoginProvider)
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate username and password (e.g., against backend)
    if (username === 'username' && password === 'password') {
      // Successful login, redirect or do something
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  const userLogin = () => { 
    setshowreg(true);// Toggling the state to show/hide Register component
  };

  return (
    
  <div align="center">
      {!showreg && (
      <h2 style={{ textAlign: "center", color: "Blue" }}>Login</h2>
      )}

      {error && <p>{error}</p>}
      
      {!showreg && (
      <form className="was-validated container container-sm-border" method="post" onSubmit={handleLogin} >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userDetails.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={userDetails.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br/>
        <div>
        <button type="submit" style={{ textAlign: "center", color: "Blue" }} className="btn btn-primary" >Login</button>
        </div>
      </form>
      )}
      <div>
      {!showreg && (
        <button className="btn btn-primary" style={{ textAlign: "center", color: "blue" }} onClick={userLogin} >Register</button>
      )}
      </div>
      {(showreg && <Register/>)}
  </div>
    
  );
};

export default LoginPage;
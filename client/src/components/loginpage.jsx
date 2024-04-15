import React, { useState, useContext } from 'react';
import Register from './registor'; // Corrected import statement
// import LoginContext from '../context/login_context';

export let showreg = false;

export let setshowreg = (value) => {
  showreg = value;
}
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [showreg, setshowreg] = useState(false);
  // const [showRegister, setShowRegister] = useState(false); // State to control whether to show Register component
  // const {userregister} = useContext(LoginProvider)
  // const {userregister,setUserRegister} = useContext(LoginContext)
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Validate username and password (e.g., against backend)
    if (username === 'admin' && password === 'password') {
      // Successful login, redirect or do something
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  const toggleRegister = () => {
    // setUserRegister(!userregister); // Toggling the state to show/hide Register component
    setshowreg(true);
  };


  return (
    <div align="center">
      
      <h2>Login</h2>
      {error && <p>{error}</p>}
      {!showreg && (
      <form action= "../routes/loginRoute" method="post" onSubmit={handleLogin} >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      )}
      <div>
        <button onClick={toggleRegister}>Register</button>
        
        {/* {(showRegister && <Register/>)|| (<LoginPage/>)}   */}
      </div>
      {(showreg && <Register/>)}
    </div>
    
  );
};

export default LoginPage;
//export setshowreg, showreg;

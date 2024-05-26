import React, { useState } from 'react';
import axios from 'axios';
// import useData from '../context/login_context';  // Adjust the import path accordingly
import LoginPage from './loginpage';  // Adjust the import path accordingly
import { useHistory } from 'react-router-dom';


const Register = () => {
  const initialUserData = {
    username: '',
    phoneno: '',
    address: '',
    email: '',
    city: '',
    country: '',
    password:''
  };
  const [showreg, setshowreg] = useState(true);
  const [userData, setUserData] = useState(initialUserData); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  // const [error, setError] = useState(null);  // State to store error message

  // URL for registration
  const regurl = "http://localhost:5000/register/userdetails";

  // Function to handle input changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleRegisterForm = async (event, userData) => {
    event.preventDefault();
    // setError(null); 
    try {
      const response = await axios.post(regurl, userData);
      console.log("Registration successful:", response.data);
      history.push('/');

      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., show an error message)
    }
  };

  // Function to toggle back to LoginPage
  const toggleRegister = () => {
    setshowreg(false);
  };

  return (
    <div align="center">
      {showreg && (
        <form className="was-validated container container-sm-border" onSubmit= {(event) =>handleRegisterForm(event,userData)}>
          <div className="form-group" align="center">
            <br />
            <h1 style={{ textAlign: "center", color: "Blue" }}> Register Details </h1>
            <br />
            <label htmlFor="username"> Username: </label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              name="username" 
              onChange={handleChange} 
              value={userData.username} 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <br />
          <div className="form-group" align="center">
            <label htmlFor="phoneno"> Phone number: </label>
            <input 
              type="text" 
              className="form-control" 
              id="phoneno" 
              name="phoneno" 
              onChange={handleChange} 
              value={userData.phoneno} 
              placeholder="Enter your phone number"  
              required 
            />
          </div>
          <br />
          <div className="form-group" align="center">
            <label htmlFor="address"> Address: </label>
            <input 
              type="text" 
              className="form-control" 
              id="address" 
              name="address" 
              onChange={handleChange} 
              value={userData.address}  
              placeholder="Enter your address"  
              required 
            />
          </div>
          <br />
          <div className="form-group" align="center">
            <label htmlFor="email"> EmailID: </label>
            <input 
              type="text" 
              className="form-control" 
              id="email" 
              name="email" 
              onChange={handleChange} 
              value={userData.email}  
              placeholder="Enter your emailID"  
              required 
            />
          </div>
          <br/>
          <div className="form-group" align="center">
            <label htmlFor="city"> City: </label>
            <input 
              type="text" 
              className="form-control" 
              id="city" 
              name="city" 
              onChange={handleChange} 
              value={userData.city}  
              placeholder="Enter your city"  
              required 
            />
          </div>
          <br/>
          <div className="form-group" align="center">
            <label htmlFor="country"> Country: </label>
            <input 
              type="text" 
              className="form-control" 
              id="country" 
              name="country" 
              onChange={handleChange} 
              value={userData.country} 
              placeholder="Enter your country"  
              required 
            />
          </div>
          <br/>

          <div className="form-group" align="center">
            <label htmlFor="country"> Password: </label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              onChange={handleChange} 
              value={userData.password} 
              placeholder="Enter your password"  
              required 
            />
          </div>
          <br/>
          <div className="form-group form-check" align="center">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="checkbox" 
              name="remember" 
              required 
            />
            <label className="form-check-label" htmlFor="checkbox">
              I agree to the terms and conditions
            </label>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <br />
          <div>
            {!showreg && <LoginPage/>}
            <button type="button" className="btn btn-primary" onClick={toggleRegister}>Login</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;

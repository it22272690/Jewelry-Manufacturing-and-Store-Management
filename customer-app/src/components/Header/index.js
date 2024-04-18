import React, { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import {signup} from '../../actions/user.actions';


const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false); // State for showing signup form
  const dispatch = useDispatch();


  const handleCustomerLogin = () => {
    setShowLoginForm(true);
    setShowSignupForm(false); // Hide signup form when login form is displayed
  };

  const handleSignupButtonClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false); // Hide login form when signup form is displayed
  };

  const handleAdminLogin = () => {
   
    window.location.href = 'http://localhost:4000/signin';
  };

 

  const [errorMessage, setErrorMessage] = useState('');

  const userLogin = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.trim()&&!password.trim()) {
      setErrorMessage('Password and Email is required');
      return;
    }
    // Check if email or password is empty
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }
  
    if (!password.trim()) {
      setErrorMessage('Password is required');
      return;
    }
  
    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      if (error.response && error.response.status === 402) {
        setErrorMessage('Access Denied! Only customers can login');
      } else {
        console.error('Login error:', error);
        setErrorMessage('Invalid email or password. Please try again.');
      }
    }
  };
  
  const usersSignup = async (e) => {
    e.preventDefault();
  
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const DOB = document.getElementById('DOB').value.trim();
    const address = document.getElementById('address').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validate form fields
    if (!name) {
      setErrorMessage('Name is required');
      return;
    }
  
    if (!DOB) {
      setErrorMessage('Date of Birth is required');
      return;
    }
  
    if (!address) {
      setErrorMessage('Address is required');
      return;
    }
  
    if (!phoneNumber) {
      setErrorMessage('Phone Number is required');
      return;
    }
  
    if (!username) {
      setErrorMessage('Username is required');
      return;
    }
  
    if (!email) {
      setErrorMessage('Email is required');
      return;
    }
  
    // Validate email format using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }
  
    if (!password) {
      setErrorMessage('Password is required');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }
  
    const user={
      name,DOB,address,phoneNumber,username,email,password
    }
    
    dispatch(signup(user));
    alert("User created successfully");
   
    // You can dispatch signup action here to handle signup process
    // Dispatch signup action with signup form data
    // await dispatch(signup({ fullname, dob, address, phoneNumber, username, email, password }));



    // Close signup form after submission
    setShowSignupForm(false);
    
  };

  const handleLoginChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'admin') {
      handleAdminLogin();
    } else if (selectedOption === 'customer') {
      setShowLoginForm(true); // Set showLoginForm to true for customer login
      setShowSignupForm(false); // Hide signup form when login form is displayed
    }
  };
  return (
    <div>
     <div className='headerBar'>
        <div className='spacer' /> {/* Spacer to push options to the right */}
        <select className='loginDropdown' onChange={handleLoginChange}>
          <option selected>Login</option>
          <option value="customer">Customer Login</option>
          <option value="admin">Admin Login</option>
        </select>
        <div style={{ marginRight: '10px' }} /> 
        <button className='signupButton' onClick={handleSignupButtonClick}>
          Sign Up
        </button>
      </div>
      {/* Login form */}
      {showLoginForm && (
  <div className='loginFormContainer'>
    <div className='loginForm'>
   
      <div className='loginFormInputs'>
        <h2>Login</h2>
        <input type='email' id='email' placeholder='email' className='inputField' />
        <input type='password' id='password' placeholder='Password' className='inputField' />
        <button className='loginSubmitButton' onClick={userLogin}>Login</button>
    
        {errorMessage && <div className="error">{errorMessage}</div>}
        <h4>Don't have an account?                  <button className='signupButton1' onClick={handleSignupButtonClick}>
          Sign Up
        </button></h4>
      </div>
    </div>
  </div>
)}


      {/* Signup form */}
      {showSignupForm && (
        <div className='signupFormContainer'>
          <div className='signupForm'>
          <div className='signupFormInputs'>
            <h2>Sign Up</h2><br/>
            <input type='text' id='name' placeholder='Full Name' className='inputField' />
            <input type='text' id='DOB' placeholder='Date of Birth' className='inputField' />
            <input type='text' id='address' placeholder='Address' className='inputField' />
            <input type='text' id='phoneNumber' placeholder='Phone Number' className='inputField' />
            <input type='text' id='username' placeholder='Username' className='inputField' />
            <input type='email' id='email' placeholder='Email' className='inputField' />
            <input type='password' id='password' placeholder='Password' className='inputField' /><br/><br/>
            <button className='signupSubmitButton' onClick={usersSignup}>Sign Up</button>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React,{useState} from "react";
import Layout from "../../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../Components/Layout/UI/Input";
import { Navigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

import {signup} from '../../actions';

export default function Index() {
  const[name,setName]=useState('');
  const[DOB,setDOB]=useState('');
  const[address,setAddress]=useState('');
  const[phoneNumber,setphoneNumber]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');
  const auth=useSelector(state=>state.auth);
  const user=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const userSignup=(e)=>{
    
e.preventDefault();

if (!name) {
  setErrorMessage('Name is required');
  return;
}

if (!DOB) {
  setErrorMessage('DOB is required');
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

  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dobRegex.test(DOB)) {
    setErrorMessage('Invalid DOB format');
    return;
  }
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    setErrorMessage('Invalid phone number format');
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
    alert("Admin created successfully")
    window.location.href = 'http://localhost:4000';

  }
 
  if(user.loading){
    return<p>loading...!</p>
  }
  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="Full Name"
                    placeholder="FullName"
                    value={name}
                    type="text"
                    onChange={(e) =>setName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Date of Birth"
                    placeholder="2001-04-05"
                    value={DOB}
                    type="text"
                    onChange={(e) =>setDOB(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Address"
                    placeholder="Address"
                    value={address}
                    type="text"
                    onChange={(e) =>setAddress(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Phone Number"
                    placeholder="0740035353"
                    value={phoneNumber}
                    type="text"
                    onChange={(e) =>setphoneNumber(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Username"
                    placeholder="Username"
                    value={username}
                    type="text"
                     onChange={(e) =>setUsername(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="a@gmail.com"
                value={email}
                type="email"
                onChange={(e) =>setEmail(e.target.value)}
              />

              <Input
                label="Password (should be six characters long)"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) =>setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
              
        {errorMessage && <div className="error">{errorMessage}</div>}
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

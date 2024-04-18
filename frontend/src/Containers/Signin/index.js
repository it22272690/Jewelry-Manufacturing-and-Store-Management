import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from '../../Components/Layout/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../../actions';
import { Navigate } from 'react-router-dom';
import './style.css';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  const userLogin = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    if (!email.trim()&&!password.trim()) {
      setError('Password and Email is required');
      return;
    }
    // Check if email or password is empty
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
  
    if (!password.trim()) {
      setError('Password is required');
      return;
    }
    try {
      await dispatch(login(user));
    } catch (error) {
      if (error.response && error.response.status === 402) {
        setError('Access Denied! Only admins can login.');
      } else {
        setError('Invalid username or password');
      }
    }
  };

  if (auth.authenticate) {
    return <Navigate to={'/'} />
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            
<Form className="form-container" onSubmit={userLogin}>
  <div className="form-group">
    <h3>Login</h3><br/>
    <label>Email</label>
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div><br/>
  <div className="form-group">
    <label>Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div><br/>
  <button className="btn-submit" type="submit">Submit</button>
  {error && <p className="error-message">{error}</p>}
  
</Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

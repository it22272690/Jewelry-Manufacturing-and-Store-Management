import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signout } from '../../../actions/user.actions';
import "./style.css"; // Importing custom CSS file for additional styling

export default function Index() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
    window.location.href = 'http://localhost:4000/signin';
  }

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <Navbar
      className="bg-dark" // Set background color to black
      variant="dark" // Use dark variant for text color
      expand="lg"
    >
      <Container >
        <Link to="/" className="navbar-brand custom-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Your dropdown or other navigation items */}
          </Nav>
          {auth.authenticate && renderLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

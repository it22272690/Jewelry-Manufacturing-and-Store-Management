import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; // Import your custom CSS file
import { useDispatch } from "react-redux";
import { login } from "../../actions";
import { signup } from "../../actions/user.actions";

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false); // State for showing signup form
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleSignupButtonClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false); // Hide login form when signup form is displayed
  };

  const handleAdminLogin = () => {
    window.location.href = "http://localhost:4000/signin";
  };

  const [errorMessage, setErrorMessage] = useState("");

  const userLogin = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email.trim() && !password.trim()) {
      setErrorMessage("Password and Email is required");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    if (!password.trim()) {
      setErrorMessage("Password is required");
      return;
    }

    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      if (error.response && error.response.status === 402) {
        setErrorMessage("Access Denied! Only customers can login");
      } else {
        console.error("Login error:", error);
        setErrorMessage("Invalid email or password. Please try again.");
      }
    }
  };

  const usersSignup = async (e) => {
    e.preventDefault();

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const DOB = document.getElementById("DOB").value.trim();
    const address = document.getElementById("address").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const nic = document.getElementById("nic").value.trim();
    // Validate form fields
    if (!name) {
      setErrorMessage("Name is required");
      return;
    }

    if (!DOB) {
      setErrorMessage("Date of Birth is required");
      return;
    }

    if (!address) {
      setErrorMessage("Address is required");
      return;
    }

    if (!phoneNumber) {
      setErrorMessage("Phone Number is required");
      return;
    }

    if (!username) {
      setErrorMessage("Username is required");
      return;
    }

    if (!email) {
      setErrorMessage("Email is required");
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (!password) {
      setErrorMessage("Password is required");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    const user = {
      name,
      DOB,
      address,
      phoneNumber,
      username,
      email,
      password,
      nic
    };

    dispatch(signup(user));
    alert("User created successfully");

    // Close signup form after submission
    setShowSignupForm(false);
  };

  const handleLoginChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "admin") {
      handleAdminLogin();
    } else if (selectedOption === "customer") {
      setShowLoginForm(true);
      setShowSignupForm(false); 
    }
  };

  return (
    <div>
      <div className="headerBar"><p class="logo">Diamonds.lk</p>
        <div className="spacer" /> {/* Spacer to push options to the right */}
        <select className="loginDropdown" onChange={handleLoginChange}>
          <option selected>Login</option>
          <option value="customer">Customer Login</option>
          <option value="admin">Admin Login</option>
        </select>
        <div style={{ marginRight: "10px" }} />
        <button className="signupButton" onClick={handleSignupButtonClick}>
          Sign Up
        </button>
      </div>
      <section class="header" id="header">
        <div class="intro py-md-5 py-4">
          <div class="container py-md-5 py-4">
            <div class="row">
              <div class="col-md">
                <div class="divider-shape"></div>
                <h1 class="my-5">
                  Elevate Your Style:
                  <br /> Where Every Jewel Tells Your Story.
                </h1>
              </div>
              <div class="col-md"></div>
            </div>
          </div>
        </div>
        
      </section>
      <section className="services-section">
      <h2 class='servicestitle'>Our Services</h2>
  <div className="container">
    
    <div className="services-container">
    
      <div className="service">
     
        <div className="service-details">
          <h3>Custom Jewelry Design</h3>
          <p>Our system offers the service of custom jewelry design, allowing customers to create unique pieces that reflect their individual style and preferences.</p>
        </div>
      </div>
      
      <div className="service">
      
        <div className="service-details">
          <h3>Repair and Restoration</h3>
          <p>Provide repair and restoration services to restore the beauty and integrity of damaged jewelry pieces.</p>
        </div>
      </div>
      <div className="service">
      
      <div className="service-details">
        <h3>Packaging and Shipping</h3>
        <p>Offer secure packaging and efficient shipping services to deliver jewelry products safely to customers.</p>
      </div>
    </div>
    
    </div>
  </div>
</section>

      <Slider {...sliderSettings}>
        
        <div>
          <img
            className="slider-image"
            src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
            alt="slide-1"
          />
        </div>
        <div>
          <img
            className="slider-image"
            src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
            alt="slide-2"
          />
        </div>
        <div>
          <img
            className="slider-image"
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="slide-3"
          />
        </div>
      </Slider>
      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <h4>About us</h4>
                <p align="center">
                  Diamonds.lk where we specialize in creating stunning jewelry
                  pieces <br />
                  that embody elegance and individuality. With a commitment to
                  craftsmanship and creativity,
                  <br /> we strive to exceed your expectations with every
                  design.
                  <br /> Our passion for jewelry extends beyond aesthetics;{" "}
                  <br />
                  it's about celebrating life's moments and creating lasting
                  memories.
                  <br /> Explore our collection and discover the craftsmanship
                  and dedication that sets Diamonds.lk apart
                </p>
              </div>

              <div class="col-md-4">
                <h4>Information</h4>
                <ul class="address1">
                  <li>
                    <i class="fa fa-map-marker"></i>Lorem Ipsum 132 xyz Lorem
                    Ipsum
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:#">info@test.com</a>
                  </li>
                  <li>
                    <i class="fa fa-mobile" aria-hidden="true"></i>{" "}
                    <a href="tel:12 34 56 78 90">12 34 56 78 90</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-4">
                <h4>Follow us</h4>
                <ul class="social-icon">
                  <li>
                    <a href="#">
                      <img src="https://img.icons8.com/color/48/twitter--v1.png"  alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                   
                      <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <p class="copyright text-uppercase">Copyright © 2018</p>
              </div>
              <div class="col-sm-7">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showLoginForm && (
        <div className="loginFormContainer">
          <div className="loginForm">
            <div className="loginFormInputs">
              <h2>Login</h2>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="inputField"
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="inputField"
              />
              <button className="loginSubmitButton" onClick={userLogin}>
                Login
              </button>

              {errorMessage && <div className="error">{errorMessage}</div>}
              <h4 className="noaccount">
                Don't have an account?{" "}
                <button
                  className="signupButton1"
                  onClick={handleSignupButtonClick}
                >
                  Sign Up
                </button>
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* Signup form */}
      {showSignupForm && (
  <div className="signupFormContainer">
    <div className="signupForm">
      <div className="signupFormInputs">
        <h2>Sign Up</h2>
        <div className="formColumn">
          <label>Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="inputField"
          />
          <label>Date of Birth</label>
          <input
            type="text"
            id="DOB"
            placeholder="2001-04-05"
            className="inputField"
          />
          <label>Address</label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="inputField"
          />
          <label>Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="0718765435"
            className="inputField"
          />
        </div>
        <div className="formColumn">
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="inputField"
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="a@gmail.com"
            className="inputField"
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="inputField"
          />
            <label>NIC</label>
          <input
            type="text"
            id="nic"
            placeholder="NIC"
            className="inputField"
          />
     
          <button className="signupSubmitButton" onClick={usersSignup}>
            Sign Up
          </button>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Header;

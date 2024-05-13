
      import React from 'react';
import "./NavCus.css";

class Navbar extends React.Component {
  render() {
    return (
      <header>
      <div className="container">
        <div className="header_flex">
          <div>
            <a href="/"><img src="\images\logo.png" alt="logo" className="logo" style={{width:'300px'}}/></a>
          </div>
          <div className="d_flex gap_26">
            <div className="d_flex gap_26">
              <div className="contact_links">
                <div className="contact_icon">
                  <img src="https://sudip-bhowmick.github.io/images/img/mail.svg" alt="mail" />
                  <a href="mailto:sudipbhowmick80@gmail.com">diamonds.lk@gmail.com</a>
                </div>
                <div className="contact_icon">
                  <img src="https://sudip-bhowmick.github.io/images/img/call.svg" alt="call" />
                  <a href="tel:918898244769">+94712345678</a>
                </div>
              </div>
              <div className="social_links">
                <a href="#" target="_blank"><img src="https://sudip-bhowmick.github.io/images/img/linkedin.svg" alt="linkedin" /></a>
                <a href="#" target="_blank"><img src="https://sudip-bhowmick.github.io/images/img/facebook.svg" alt="facebook" /></a>
                <a href="#" target="_blank"><img src="https://sudip-bhowmick.github.io/images/img/twitter.svg" alt="twitter" /></a>
              </div>
            </div>
            <div className="header_cta">
              <a href="javascript:void(0)" className="btn_one">Video call</a>
            </div>

            <button type="button" className="burger" id="burger">
              <span className="burger_line"></span>
              <span className="burger_line"></span>
              <span className="burger_line"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
      <nav className="dark_bg" id="menu">
        <div className="container">
          <ul>
            <li><a href="javascript:void(0)" className="active">Home</a></li>
            <li><a href="/AddCuss" >Customize Order</a></li>
            <li><a href="/CusDetails">Order Details</a></li>
            <li><a href="javascript:void(0)">Book Appointment</a></li>
            <li>
              <a className="has_sub_menu" href="javascript:void(0)">Calculators</a>
              <ul className="sub_menu">
                <li><a className="menu-link" href="javascript:void(0)">Tax calulator</a></li>
                <li><a className="menu-link" href="javascript:void(0)">TDS calulator</a></li>
              </ul>
            </li>
            <li><a href="javascript:void(0)">Insights</a></li>
            <li><a href="javascript:void(0)">Ebooks</a></li>
            <li><a href="javascript:void(0)">Contact us</a></li>
          </ul>
        </div>
      </nav>
    </header>
    );
  }
}

export default Navbar;

  
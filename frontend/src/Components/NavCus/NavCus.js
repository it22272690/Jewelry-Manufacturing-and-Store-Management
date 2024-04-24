import React from 'react';
import "./NavCus.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">Daimonds.lk</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
            <li className="nav-item">
            <a href="/mainhome" className="nav-link active cus-a">
  <i className="far fa-clone"></i>Home
</a>

            </li>
            <li className="nav-item ">
            <a href="/AddCuss" className="nav-link active cus-a"><i className="far fa-copyt"></i>
  Cutomize order</a>
            </li>
            <li className="nav-item">
            <a href="/CusDetails" className="nav-link active cus-a">
            <i className="far fa-chart-bar"></i>Details
</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Calendar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar"></i>Charts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);"><i className="far fa-copy"></i>Documents</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

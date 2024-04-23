import React from "react";
import "./NavM.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-11">
          <Link to="/mainhome" className="active home-a">
            <h2>Home</h2>
          </Link>
        </li>
        <li className="home-11">
          <Link to="/addmaterial" className="active home-a">
            <h2>Add material</h2>
          </Link>
        </li>
        <li className="home-11">
          <Link to="/materialdetails" className="active home-a">
            <h2>Material details</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

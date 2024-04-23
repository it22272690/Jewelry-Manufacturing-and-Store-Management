import React from "react";
import "./NavMO.css";
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
          <Link to="/addmaterialout" className="active home-a">
            <h2>Add materialout</h2>
          </Link>
        </li>
        <li className="home-11">
          <Link to="/materialoutdetails" className="active home-a">
            <h2>Materialout details</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

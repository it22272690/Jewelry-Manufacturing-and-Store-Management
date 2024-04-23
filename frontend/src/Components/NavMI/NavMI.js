import React from "react";
import "./NavMI.css";
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
          <Link to="/addmaterialin" className="active home-a">
            <h2>Add materialin</h2>
          </Link>
        </li>
        <li className="home-11">
          <Link to="/materialindetails" className="active home-a">
            <h2>Materialin details</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

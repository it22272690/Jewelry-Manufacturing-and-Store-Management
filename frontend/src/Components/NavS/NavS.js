import React from "react";
import "./NavS.css";
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
          <Link to="/addsupplier" className="active home-a">
            <h2>Add supplier</h2>
          </Link>
        </li>
        <li className="home-11">
          <Link to="/supplierdetails" className="active home-a">
            <h2>Supplier details</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

import React from 'react'
//import NavM from "../NavM/NavM.js"

//new
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{fontFamily:"arial"}}>
      
      <h1>Home Page</h1>

      <Link to="/materialdetails"><h1>Material Page</h1></Link>
      
      <Link to="/productdetails"><h1>Product Page</h1></Link>

      <Link to="/supplierdetails"><h1>Supplier Page</h1></Link>

      <Link to="/reservedetails"><h1>Reserve Page</h1></Link>

      <Link to="/materialoutdetails"><h1>Materialout Page</h1></Link>

      <Link to="/materialindetails"><h1>Materialin Page</h1></Link>


    </div>
  )
}

export default Home

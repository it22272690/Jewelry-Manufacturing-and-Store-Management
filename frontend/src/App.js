import React from "react";
import {Route,Routes} from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import AddMaterial from "./Components/Add Material/AddMaterial";
import Materials from "./Components/Material Details/Materials";
import UpdateMaterial from "./Components/UpdateMaterial/UpdateMaterial";

import AddProduct from "./Components/Add Product/AddProduct";
import Products from "./Components/Product Details/Products";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";

import AddSupplier from "./Components/Add Supplier/AddSupplier";
import Suppliers from "./Components/Supplier Details/Suppliers";
import UpdateSupplier from "./Components/UpdateSupplier/UpdateSupplier";

import AddReserve from "./Components/Add Reserve/AddReserve";
import Reserves from "./Components/Reserve Details/Reserves";
import UpdateReserve from "./Components/UpdateReserve/UpdateReserve";

import AddMaterialout from "./Components/Add Materialout/AddMaterialout";
import Materialouts from "./Components/Materialout Details/Materialouts";
import UpdateMaterialout from "./Components/UpdateMaterialout/UpdateMaterialout";

import AddMaterialin from "./Components/Add Materialin/AddMaterialin";
import Materialins from "./Components/Materialin Details/Materialins";
import UpdateMaterialin from "./Components/UpdateMaterialin/UpdateMaterialin";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mainhome" element={<Home/>}/>
          <Route path="/addmaterial" element={<AddMaterial/>}/>
          <Route path="/materialdetails" element={<Materials/>}/>
          <Route path="/materialdetails/:id" element={<UpdateMaterial/>}/>

          
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/productdetails" element={<Products/>}/>
          <Route path="/productdetails/:id" element={<UpdateProduct/>}/>

          <Route path="/addsupplier" element={<AddSupplier/>}/>
          <Route path="/supplierdetails" element={<Suppliers/>}/>
          <Route path="/supplierdetails/:id" element={<UpdateSupplier/>}/>

          <Route path="/addreserve" element={<AddReserve/>}/>
          <Route path="/reservedetails" element={<Reserves/>}/>
          <Route path="/reservedetails/:id" element={<UpdateReserve/>}/>

          <Route path="/addmaterialout" element={<AddMaterialout/>}/>
          <Route path="/materialoutdetails" element={<Materialouts/>}/>
          <Route path="/materialoutdetails/:id" element={<UpdateMaterialout/>}/>

          <Route path="/addmaterialin" element={<AddMaterialin/>}/>
          <Route path="/materialindetails" element={<Materialins/>}/>
          <Route path="/materialindetails/:id" element={<UpdateMaterialin/>}/>

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

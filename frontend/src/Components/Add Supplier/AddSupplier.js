import NavS from "../NavS/NavS";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddSupplier() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    supplierID:"",
    name: "",
    nic: "",
    email: "",
    phone: "",
    address:"",
    bankdetails:"",
    description: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await sendRequest();
    history("/supplierdetails");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/suppliers", {
        supplierID:String(inputs.supplierID),
        name: String(inputs.name),
        nic: String(inputs.nic),
        email: String(inputs.email),
        phone: String(inputs.phone),
        address: String(inputs.address),
        bankdetails: String(inputs.bankdetails),
        description: String(inputs.description),
      })
      .then((res) => res.data);
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavS />
      <center>
        <h1>Add Supplier</h1>
      </center>

      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid",
          borderRadius: "15px",
          padding: "20px",
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "lightgray",
        }}
      >
        <label style={{ fontSize: "20px" }}>SupplierID</label>
        <br />
        <input
          type="text"
          name="supplierID"
          onChange={handleChange}
          value={inputs.supplierID}
          required
          pattern="[A-Za-z0-9]+"
          style={{
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            fontSize: "20px",
          }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
          pattern="[a-zA-Z]+"
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>NIC</label>
        <br />
        <input
          type="text"
          name="nic"
          onChange={handleChange}
          value={inputs.nic}
          required
          pattern="^\d{9}(v|V)|\d{12}$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Phone</label>
        <br />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          required
          pattern="^0\d{9}$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
          pattern="[A-Za-z0-9]+"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Bankdetails</label>
        <br />
        <input
          type="text"
          name="bankdetails"
          onChange={handleChange}
          value={inputs.bankdetails}
          required
          pattern="[A-Za-z0-9]+"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Description</label>
        <br />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={inputs.description}
          
          pattern="[a-zA-Z]+"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddSupplier;

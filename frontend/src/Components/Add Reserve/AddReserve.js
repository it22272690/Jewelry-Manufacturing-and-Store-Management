import NavR from "../NavR/NavR";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddReserve() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    reserveID:"",
    OrderId:"",
    productID:"",
    quantity: "",
    description: "",
    status: "",
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
    history("/reservedetails");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/reserves", {
        reserveID: String(inputs.reserveID),
        OrderId: String(inputs.OrderId),
        productID: String(inputs.productID),
        quantity: String(inputs.quantity),
        description: String(inputs.description),
        status: String(inputs.status),
      })
      .then((res) => res.data);
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavR />
      <center>
        <h1>Add Reserve</h1>
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
        <label style={{ fontSize: "20px" }}>ReserveID</label>
        <br />
        <input
          type="text"
          name="reserveID"
          onChange={handleChange}
          value={inputs.reserveID}
          required
          style={{
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            fontSize: "20px", // Adjust the font size as needed
          }}
        />

        <br />
        <br />

        <label style={{ fontSize: "20px" }}>OrderID</label>
        <br />
        <input
          type="text"
          name="OrderId"
          onChange={handleChange}
          value={inputs.OrderId}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>ProductID</label>
        <br />
        <input
          type="text"
          name="productID"
          onChange={handleChange}
          value={inputs.productID}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Quantity</label>
        <br />
        <input
          type="Number"
          name="quantity"
          onChange={handleChange}
          value={inputs.quantity}
          required
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
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Status</label>
        <br />
        <input
          type="text"
          name="status"
          onChange={handleChange}
          value={inputs.status}
          required
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

export default AddReserve;

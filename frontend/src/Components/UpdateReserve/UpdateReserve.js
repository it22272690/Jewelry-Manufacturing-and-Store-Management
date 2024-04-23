import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavR from "../NavR/NavR";

function UpdateReserve() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHanlder = async () => {
      await axios
        .get(`http://localhost:5000/reserves/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.reserve));
    };
    fetchHanlder();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/reserves/${id}`, {
        reserveID: String(inputs.reserveID),
        customerID: String(inputs.customerID),
        productID: String(inputs.productID),
        quantity: String(inputs.quantity),
        description: String(inputs.description),
        status: String(inputs.status),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/reservedetails"));
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <NavR />
      <center>
        <h1>Update Reserve</h1>
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

        <label style={{ fontSize: "20px" }}>CustomerID</label>
        <br />
        <input
          type="text"
          name="customerID"
          onChange={handleChange}
          value={inputs.customerID}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>productID</label>
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

export default UpdateReserve;
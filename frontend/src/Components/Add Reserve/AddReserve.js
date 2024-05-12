import NavR from "../NavR/NavR";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddReserve() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    reserveID: "",
    OrderId: "",
    productID: "",
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
    <div>
      <NavR />
      <center>
        <h1>Add Reserve</h1>
      </center>

      <form onSubmit={handleSubmit}>
        <label>ReserveID</label>
        <br />
        <input
          type="text"
          name="reserveID"
          onChange={handleChange}
          value={inputs.reserveID}
          required
          pattern="[A-Za-z0-9]+"
        />

        <br />
        <br />

        <label>OrderID</label>
        <br />
        <input
          type="text"
          name="OrderId"
          onChange={handleChange}
          value={inputs.OrderId}
          required
          pattern="[A-Za-z0-9]+"
        />
        <br />
        <br />

        <label>ProductID</label>
        <br />
        <input
          type="text"
          name="productID"
          onChange={handleChange}
          value={inputs.productID}
          required
          pattern="[A-Za-z0-9]+"
        />
        <br />
        <br />

        <label>Quantity</label>
        <br />
        <input
          type="text"
          name="quantity"
          onChange={handleChange}
          value={inputs.quantity}
          required
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Description</label>
        <br />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={inputs.description}
          pattern="[a-zA-Z ]+"

        />
        <br />
        <br />

        <div>
          <label>Status</label>
          <br />
          <input
            type="radio"
            id="delivered"
            name="status"
            value="Delivered"
            checked={inputs.status === "Delivered"}
            onChange={handleChange}
          />
          <label htmlFor="delivered">Delivered</label>
          <input
            type="radio"
            id="notDelivered"
            name="status"
            value="Not Delivered"
            checked={inputs.status === "Not Delivered"}
            onChange={handleChange}
          />
          <label htmlFor="notDelivered">Not Delivered</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReserve;

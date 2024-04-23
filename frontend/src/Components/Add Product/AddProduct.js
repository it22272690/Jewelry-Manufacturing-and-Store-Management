import NavP from "../NavP/NavP";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    productID:"",
    name: "",
    price: "",
    quantity: "",
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
    history("/productdetails");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/products", {
        productID: String(inputs.productID),
        name: String(inputs.name),
        price: String(inputs.price),
        quantity: String(inputs.quantity),
        description: String(inputs.description),
      })
      .then((res) => res.data);
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavP />
      <center>
        <h1>Add Product</h1>
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
        <label style={{ fontSize: "20px" }}>ProductID</label>
        <br />
        <input
          type="text"
          name="productID"
          onChange={handleChange}
          value={inputs.productID}
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

        <label style={{ fontSize: "20px" }}>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Price</label>
        <br />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={inputs.price}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Quantity</label>
        <br />
        <input
          type="number"
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

export default AddProduct;

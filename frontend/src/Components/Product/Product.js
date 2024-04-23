import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const { _id, productID,name, price, quantity, description } = props.product;

  const history = useNavigate();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      await axios
        .delete(`http://localhost:5000/products/${_id}`)
        .then((res) => res.data)
        .then(() => {
          history("/");
          history("/productdetails");
        })
        .catch((error) => console.error("Error deleting product: ", error));
    }
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{productID}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
      <Link to={`/productdetails/${_id}`}>
        <button
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            color: "black",
            padding: "10px",
            marginRight: "10px",
            border: "none",
            cursor: "pointer",
            fontSize:"16px",
          }}
        >
          Update
        </button>
      </Link>
      <button
        onClick={deleteHandler}
        style={{
          backgroundColor: "red",
          borderRadius: "5px",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
          fontSize:"16px",
        }}
      >
        Delete
      </button>
      </td>
    </tr>
  );
}

export default Product;

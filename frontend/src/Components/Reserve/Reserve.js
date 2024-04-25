import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reserve(props) {
  const { _id, reserveID,OrderId,productID,quantity, description, status } = props.reserve;

  const history = useNavigate();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reserve?"
    );
    if (confirmDelete) {
      await axios
        .delete(`http://localhost:5000/reserves/${_id}`)
        .then((res) => res.data)
        .then(() => {
          history("/");
          history("/reservedetails");
        })
        .catch((error) => console.error("Error deleting reserve: ", error));
    }
  };

  return (
    <tr>
      <td>{reserveID}</td>
      <td>{OrderId}</td>
      <td>{productID}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>
      <Link to={`/reservedetails/${_id}`}>
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

export default Reserve;

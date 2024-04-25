import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Material(props) {
  const { _id, materialID,name,type,grade,supplier,unit,unitweight,unitcost,quantity,description } = props.material;

  const history = useNavigate();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this material?"
    );
    if (confirmDelete) {
      await axios
        .delete(`http://localhost:5000/materials/${_id}`)
        .then((res) => res.data)
        .then(() => {
          history("/");
          history("/materialdetails");
        })
        .catch((error) => console.error("Error deleting material: ", error));
    }
  };

  return (
    <tr>
      <td>{materialID}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{grade}</td>
      <td>{supplier}</td>
      <td>{unit}</td>
      <td>{unitweight}</td>
      <td>{unitcost}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
      <Link to={`/materialdetails/${_id}`}>
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

export default Material;

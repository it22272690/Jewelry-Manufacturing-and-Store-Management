import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Materialin(props) {
  const { _id, supplierID,date,gold, silver, pladium,ruby, sapphire, aquamarine,value } = props.materialin;

  const history = useNavigate();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this materialin?"
    );
    if (confirmDelete) {
      await axios
        .delete(`http://localhost:5000/materialins/${_id}`)
        .then((res) => res.data)
        .then(() => {
          history("/");
          history("/materialindetails");
        })
        .catch((error) => console.error("Error deleting materialin: ", error));
    }
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{supplierID}</td>
      <td>{date}</td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{pladium}</td>
      <td>{ruby}</td>
      <td>{sapphire}</td>
      <td>{aquamarine}</td>
      <td>{value}</td>
      <td>
      <Link to={`/materialindetails/${_id}`}>
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

export default Materialin;

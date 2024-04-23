import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Materialout(props) {
  const { _id, materialoutID, JobId, date, gold,silver,pladium,ruby,sapphire,aquamarine,description } = props.materialout;

  const history = useNavigate();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this materialout?"
    );
    if (confirmDelete) {
      await axios
        .delete(`http://localhost:5000/materialouts/${_id}`)
        .then((res) => res.data)
        .then(() => {
          history("/");
          history("/materialoutdetails");
        })
        .catch((error) => console.error("Error deleting materialout: ", error));
    }
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{materialoutID}</td>
      <td>{JobId}</td>
      <td>{date}</td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{pladium}</td>
      <td>{ruby}</td>
      <td>{sapphire}</td>
      <td>{aquamarine}</td>
      <td>{description}</td>
      <td>
      <Link to={`/materialoutdetails/${_id}`}>
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

export default Materialout;

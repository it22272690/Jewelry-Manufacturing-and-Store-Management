import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Materialin(props) {
  const { _id, materialinID,supplierID,date,gold,silver,pladium,platinum,thairuby,burmeseruby,bluesapphire,purplesapphire,starsapphire,whitesapphire,blooddiamond,pinkstardiamond,regentdiamond,colombianaquamarine,madagascaraquamarine,value} = props.materialin;

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
      <td>{materialinID}</td>
      <td>{supplierID}</td>
      <td>{date}</td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{pladium}</td>
      <td>{platinum}</td>
      <td>{thairuby}</td>
      <td>{burmeseruby}</td>
      <td>{bluesapphire}</td>
      <td>{purplesapphire}</td>
      <td>{starsapphire}</td>
      <td>{whitesapphire}</td>
      <td>{blooddiamond}</td>
      <td>{pinkstardiamond}</td>
      <td>{regentdiamond}</td>
      <td>{colombianaquamarine}</td>
      <td>{madagascaraquamarine}</td>
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

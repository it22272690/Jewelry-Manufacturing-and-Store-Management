import NavM from "../NavM/NavM";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddMaterial() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    materialID: "",
    name: "",
    type: "",
    grade: "",
    supplier: "",
    unit: "",
    unitweight: "",
    unitcost: "",
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
    history("/materialdetails");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/materials", {
        materialID: String(inputs.materialID),
        name: String(inputs.name),
        type: String(inputs.type),
        grade: String(inputs.grade),
        supplier: String(inputs.supplier),
        unit: String(inputs.unit),
        unitweight: String(inputs.unitweight),
        unitcost: String(inputs.unitcost),
        quantity: String(inputs.quantity),
        description: String(inputs.description),
      })
      .then((res) => res.data);
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavM />
      <center>
        <h1>Add Material</h1>
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
        <label style={{ fontSize: "20px" }}>MaterialID</label>
        <br />
        <input
          type="text"
          name="materialID"
          onChange={handleChange}
          value={inputs.materialID}
          required
          style={{
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            fontSize: "20px", 
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

        <label style={{ fontSize: "20px" }}>Type</label>
        <br />
        <input
          type="text"
          name="type"
          onChange={handleChange}
          value={inputs.type}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Grade</label>
        <br />
        <input
          type="text"
          name="grade"
          onChange={handleChange}
          value={inputs.grade}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Supplier</label>
        <br />
        <input
          type="text"
          name="supplier"
          onChange={handleChange}
          value={inputs.supplier}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Unit</label>
        <br />
        <input
          type="text"
          name="unit"
          onChange={handleChange}
          value={inputs.unit}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Unitweight</label>
        <br />
        <input
          type="Number"
          name="unitweight"
          onChange={handleChange}
          value={inputs.unitweight}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Unitcost</label>
        <br />
        <input
          type="Number"
          name="unitcost"
          onChange={handleChange}
          value={inputs.unitcost}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
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
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
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

export default AddMaterial;
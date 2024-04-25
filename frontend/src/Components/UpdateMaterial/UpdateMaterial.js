import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavM from "../NavM/NavM";

function UpdateMaterial() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHanlder = async () => {
      await axios
        .get(`http://localhost:5000/materials/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.material));
    };
    fetchHanlder();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/materials/${id}`, {
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

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/materialdetails"));
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <NavM />
      <center>
        <h1>Update Material</h1>
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
          pattern="[A-Za-z0-9]+"
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
          pattern="[a-zA-Z]+"
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
          pattern="[a-zA-Z]+"
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
          pattern="[a-zA-Z]+"
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
          pattern="[a-zA-Z]+"
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
          pattern="[a-zA-Z]+"
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Unitweight</label>
        <br />
        <input
          type="text"
          name="unitweight"
          onChange={handleChange}
          value={inputs.unitweight}
          required
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Unitcost</label>
        <br />
        <input
          type="text"
          name="unitcost"
          onChange={handleChange}
          value={inputs.unitcost}
          required
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Quantity</label>
        <br />
        <input
          type="text"
          name="quantity"
          onChange={handleChange}
          value={inputs.quantity}
          required
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
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
          
          pattern="[a-zA-Z]+"
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

export default UpdateMaterial;

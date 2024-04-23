import NavMI from "../NavMI/NavMI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddMaterialin() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    supplierID:"",
    date:"",
    gold: "",
    silver: "",
    pladium: "",
    ruby: "",
    sapphire:"",
    aquamarine:"",
    value:"",
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
    history("/materialindetails");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/materialins", {
        supplierID: String(inputs.supplierID),
        date: String(inputs.date),
        gold: String(inputs.gold),
        silver: String(inputs.silver),
        pladium: String(inputs.pladium),
        ruby: String(inputs.ruby),
        sapphire: String(inputs.sapphire),
        aquamarine: String(inputs.aquamarine),
        value: String(inputs.value),
      })
      .then((res) => res.data);
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavMI />
      <center>
        <h1>Add Materialin</h1>
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
        <label style={{ fontSize: "20px" }}>SupplierID</label>
        <br />
        <input
          type="text"
          name="supplierID"
          onChange={handleChange}
          value={inputs.supplierID}
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

        <label style={{ fontSize: "20px" }}>Date</label>
        <br />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={inputs.date}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Gold</label>
        <br />
        <input
          type="number"
          name="gold"
          onChange={handleChange}
          value={inputs.gold}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Silver</label>
        <br />
        <input
          type="number"
          name="silver"
          onChange={handleChange}
          value={inputs.silver}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Pladium</label>
        <br />
        <input
          type="number"
          name="pladium"
          onChange={handleChange}
          value={inputs.pladium}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Ruby</label>
        <br />
        <input
          type="number"
          name="ruby"
          onChange={handleChange}
          value={inputs.ruby}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Sapphire</label>
        <br />
        <input
          type="number"
          name="sapphire"
          onChange={handleChange}
          value={inputs.sapphire}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Aquamarine</label>
        <br />
        <input
          type="number"
          name="aquamarine"
          onChange={handleChange}
          value={inputs.aquamarine}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Value</label>
        <br />
        <input
          type="number"
          name="value"
          onChange={handleChange}
          value={inputs.value}
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

export default AddMaterialin;

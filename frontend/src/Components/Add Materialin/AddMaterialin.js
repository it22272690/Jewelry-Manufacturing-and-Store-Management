import NavMI from "../NavMI/NavMI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddMaterialin() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    materialinID:"",
    supplierID:"",
    date:"",
    gold: "",
    silver: "",
    pladium: "",
    platinum: "",
    thairuby:"",
    burmeseruby:"",
    bluesapphire:"",
    purplesapphire: "",
    starsapphire: "",
    whitesapphire: "",
    blooddiamond: "",
    pinkstardiamond:"",
    regentdiamond:"",
    colombianaquamarine:"",
    madagascaraquamarine: "",
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
        materialinID: String(inputs.materialinID),
        supplierID: String(inputs.supplierID),
        date: String(inputs.date),
        gold: String(inputs.gold),
        silver: String(inputs.silver),
        pladium: String(inputs.pladium),
        platinum: String(inputs.platinum),
        thairuby: String(inputs.thairuby),
        burmeseruby: String(inputs.burmeseruby),
        bluesapphire: String(inputs.bluesapphire),
        purplesapphire: String(inputs.purplesapphire),
        starsapphire: String(inputs.starsapphire),
        whitesapphire: String(inputs.whitesapphire),
        blooddiamond: String(inputs.blooddiamond),
        pinkstardiamond: String(inputs.pinkstardiamond),
        regentdiamond: String(inputs.regentdiamond),
        colombianaquamarine: String(inputs.colombianaquamarine),
        madagascaraquamarine: String(inputs.madagascaraquamarine),
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

      <label style={{ fontSize: "20px" }}>MaterialinID</label>
        <br />
        <input
          type="text"
          name="materialinID"
          onChange={handleChange}
          value={inputs.materialinID}
          required
          pattern="[A-Za-z0-9]+"
          style={{
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            fontSize: "20px", // Adjust the font size as needed
          }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>SupplierID</label>
        <br />
        <input
          type="text"
          name="supplierID"
          onChange={handleChange}
          value={inputs.supplierID}
          required
          pattern="[A-Za-z0-9]+"
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
          type="text"
          name="gold"
          onChange={handleChange}
          value={inputs.gold}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Silver</label>
        <br />
        <input
          type="text"
          name="silver"
          onChange={handleChange}
          value={inputs.silver}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Pladium</label>
        <br />
        <input
          type="text"
          name="pladium"
          onChange={handleChange}
          value={inputs.pladium}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Platinum</label>
        <br />
        <input
          type="text"
          name="platinum"
          onChange={handleChange}
          value={inputs.platinum}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Thai Ruby</label>
        <br />
        <input
          type="text"
          name="thairuby"
          onChange={handleChange}
          value={inputs.thairuby}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Burmese Ruby</label>
        <br />
        <input
          type="text"
          name="burmeseruby"
          onChange={handleChange}
          value={inputs.burmeseruby}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Blue Sapphire</label>
        <br />
        <input
          type="text"
          name="bluesapphire"
          onChange={handleChange}
          value={inputs.bluesapphire}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Purple Sapphire</label>
        <br />
        <input
          type="text"
          name="purplesapphire"
          onChange={handleChange}
          value={inputs.purplesapphire}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Star Sapphire</label>
        <br />
        <input
          type="text"
          name="starsapphire"
          onChange={handleChange}
          value={inputs.starsapphire}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>White Sapphire</label>
        <br />
        <input
          type="text"
          name="whitesapphire"
          onChange={handleChange}
          value={inputs.whitesapphire}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Blood Diamond</label>
        <br />
        <input
          type="text"
          name="blooddiamond"
          onChange={handleChange}
          value={inputs.blooddiamond}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Pink star Diamond</label>
        <br />
        <input
          type="text"
          name="pinkstardiamond"
          onChange={handleChange}
          value={inputs.pinkstardiamond}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Regent Diamond</label>
        <br />
        <input
          type="text"
          name="regentdiamond"
          onChange={handleChange}
          value={inputs.regentdiamond}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Colombian Aquamarine</label>
        <br />
        <input
          type="text"
          name="colombianaquamarine"
          onChange={handleChange}
          value={inputs.colombianaquamarine}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Madagascar Aquamarine</label>
        <br />
        <input
          type="text"
          name="madagascaraquamarine"
          onChange={handleChange}
          value={inputs.madagascaraquamarine}
          
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Value</label>
        <br />
        <input
          type="text"
          name="value"
          onChange={handleChange}
          value={inputs.value}
          required
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
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

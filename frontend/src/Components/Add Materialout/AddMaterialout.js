import NavMO from "../NavMO/NavMO";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddMaterialout() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    materialoutID:"",
    JobId:"",
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
    description:""
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
    history("/materialoutdetails");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/materialouts", {
        materialoutID: String(inputs.materialoutID),
        JobId: String(inputs.JobId),
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
        description: String(inputs.description),
      })
      .then((res) => res.data);
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavMO />
      <center>
        <h1>Add Materialout</h1>
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
        <label style={{ fontSize: "20px" }}>MaterialoutID</label>
        <br />
        <input
          type="text"
          name="materialoutID"
          onChange={handleChange}
          value={inputs.materialoutID}
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

        <label style={{ fontSize: "20px" }}>JobID</label>
        <br />
        <input
          type="text"
          name="JobId"
          onChange={handleChange}
          value={inputs.JobId}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px",  }}
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
          style={{ borderRadius: "5px", padding: "5px", width: "100%",fontSize: "20px", }}
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

        <label style={{ fontSize: "20px" }}>Platinum</label>
        <br />
        <input
          type="number"
          name="platinum"
          onChange={handleChange}
          value={inputs.platinum}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Thai Ruby</label>
        <br />
        <input
          type="number"
          name="thairuby"
          onChange={handleChange}
          value={inputs.thairuby}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Burmese Ruby</label>
        <br />
        <input
          type="number"
          name="burmeseruby"
          onChange={handleChange}
          value={inputs.burmeseruby}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Blue Sapphire</label>
        <br />
        <input
          type="number"
          name="bluesapphire"
          onChange={handleChange}
          value={inputs.bluesapphire}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Purple Sapphire</label>
        <br />
        <input
          type="number"
          name="purplesapphire"
          onChange={handleChange}
          value={inputs.purplesapphire}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Star Sapphire</label>
        <br />
        <input
          type="number"
          name="starsapphire"
          onChange={handleChange}
          value={inputs.starsapphire}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>White Sapphire</label>
        <br />
        <input
          type="number"
          name="whitesapphire"
          onChange={handleChange}
          value={inputs.whitesapphire}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Blood Diamond</label>
        <br />
        <input
          type="number"
          name="blooddiamond"
          onChange={handleChange}
          value={inputs.blooddiamond}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Pink star Diamond</label>
        <br />
        <input
          type="number"
          name="pinkstardiamond"
          onChange={handleChange}
          value={inputs.pinkstardiamond}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Regent Diamond</label>
        <br />
        <input
          type="number"
          name="regentdiamond"
          onChange={handleChange}
          value={inputs.regentdiamond}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Colombian Aquamarine</label>
        <br />
        <input
          type="number"
          name="colombianaquamarine"
          onChange={handleChange}
          value={inputs.colombianaquamarine}
          required
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
        />
        <br />
        <br />

        <label style={{ fontSize: "20px" }}>Madagascar Aquamarine</label>
        <br />
        <input
          type="number"
          name="madagascaraquamarine"
          onChange={handleChange}
          value={inputs.madagascaraquamarine}
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

export default AddMaterialout;

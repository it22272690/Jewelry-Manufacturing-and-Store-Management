import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavMI from "../NavMI/NavMI";

function UpdateMaterialin() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHanlder = async () => {
      await axios
        .get(`http://localhost:5000/materialins/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.materialin));
    };
    fetchHanlder();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/materialins/${id}`, {
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

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/materialindetails"));
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <NavMI />
      <center>
        <h1>Update Materialin</h1>
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
          style={{
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            fontSize: "20px", 
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
          style={{
            borderRadius: "5px",
            padding: "5px",
            width: "100%",
            fontSize: "20px", 
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

export default UpdateMaterialin;

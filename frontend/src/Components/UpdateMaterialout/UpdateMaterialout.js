import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavMO from "../NavMO/NavMO";

function UpdateMaterialout() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHanlder = async () => {
      await axios
        .get(`http://localhost:5000/materialouts/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.materialout));
    };
    fetchHanlder();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/materialouts/${id}`, {
        materialoutID: String(inputs.materialoutID),
        JobId: String(inputs.JobId),
        date: String(inputs.date),
        gold: String(inputs.gold),
        silver: String(inputs.silver),
        pladium: String(inputs.pladium),
        ruby: String(inputs.ruby),
        sapphire: String(inputs.sapphire),
        aquamarine: String(inputs.aquamarine),
        description: String(inputs.description)
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
    sendRequest().then(() => history("/materialoutdetails"));
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <NavMO />
      <center>
        <h1>Update Materialout</h1>
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
          style={{ borderRadius: "5px", padding: "5px", width: "100%" ,fontSize: "20px",}}
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

export default UpdateMaterialout;

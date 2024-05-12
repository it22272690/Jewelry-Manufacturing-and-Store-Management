import NavMI from "../NavMI/NavMI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function AddMaterialin() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    materialinID: "",
    supplierID: "",
    date: "",
    gold: "",
    silver: "",
    pladium: "",
    platinum: "",
    thairuby: "",
    burmeseruby: "",
    bluesapphire: "",
    blooddiamond: "",
    regentdiamond: "",
    value: "",
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
        blooddiamond: String(inputs.blooddiamond),
        regentdiamond: String(inputs.regentdiamond),
        value: String(inputs.value),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <NavMI />
      <center>
        <h1>Add Materialin</h1>
      </center>

      <form onSubmit={handleSubmit}>
        <label>MaterialinID</label>
        <br />
        <input
          type="text"
          name="materialinID"
          onChange={handleChange}
          value={inputs.materialinID}
          required
          pattern="[A-Za-z0-9]+"
        />
        <br />
        <br />

        <label>SupplierID</label>
        <br />
        <input
          type="text"
          name="supplierID"
          onChange={handleChange}
          value={inputs.supplierID}
          required
          pattern="[A-Za-z0-9]+"
        />
        <br />
        <br />

        <label>Date</label>
        <br />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={inputs.date}
          required
        />
        <br />
        <br />

        <label>Gold</label>
        <br />
        <input
          type="text"
          name="gold"
          onChange={handleChange}
          value={inputs.gold}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Silver</label>
        <br />
        <input
          type="text"
          name="silver"
          onChange={handleChange}
          value={inputs.silver}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Pladium</label>
        <br />
        <input
          type="text"
          name="pladium"
          onChange={handleChange}
          value={inputs.pladium}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Platinum</label>
        <br />
        <input
          type="text"
          name="platinum"
          onChange={handleChange}
          value={inputs.platinum}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Thai Ruby</label>
        <br />
        <input
          type="text"
          name="thairuby"
          onChange={handleChange}
          value={inputs.thairuby}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Burmese Ruby</label>
        <br />
        <input
          type="text"
          name="burmeseruby"
          onChange={handleChange}
          value={inputs.burmeseruby}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <label>Blue Sapphire</label>
        <br />
        <input
          type="text"
          name="bluesapphire"
          onChange={handleChange}
          value={inputs.bluesapphire}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />


        <label>Blood Diamond</label>
        <br />
        <input
          type="text"
          name="blooddiamond"
          onChange={handleChange}
          value={inputs.blooddiamond}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />


        <label>Regent Diamond</label>
        <br />
        <input
          type="text"
          name="regentdiamond"
          onChange={handleChange}
          value={inputs.regentdiamond}
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />


        <label>Value</label>
        <br />
        <input
          type="text"
          name="value"
          onChange={handleChange}
          value={inputs.value}
          required
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMaterialin;

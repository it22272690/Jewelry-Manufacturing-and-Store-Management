import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./cuss.css";

const Cuss = ({ cus }) => {
  const {
    _id,
    FirstName,
    LastName,
    AccountUsername,
    MobileNumber,
    Address,
    City,
    Province,
    Zip,
    OrderNum,
    ChooseItem,
    ChooseDesign,
    Material1,
    MaterialWeight1,
    Material2,
    MaterialWeight2,
    Material3,
    MaterialWeight3,
    AttributeType,
    Dimension,
    ChooseStoneType,
    ChooseStone,
    StoneWeight,
  } = cus;

  const history = useNavigate();
   
  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      await axios
        .delete(`http://localhost:5000/cuss/${_id}`)
        .then((res) => res.data)
        .then(() => {
          history("/");
          history("/CusDetails");
        })
        .catch((error) => console.error("Error deleting job: ", error));
    }
  };

  return (
    <div className="cus-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '130px' }}>
      <br />
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Order Id:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{_id}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>First Name:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{FirstName}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Last Name:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{LastName}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Account Username:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{AccountUsername}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Mobile Number:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{MobileNumber}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Address:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Address}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>City:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{City}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Province:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Province}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Zip:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Zip}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Order Number:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{OrderNum}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Choose Item:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{ChooseItem}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Choose Design:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}><img src={`/images/${ChooseDesign}`} alt="Choose Design" /></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Material 1:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Material1}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Material Weight 1:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{MaterialWeight1}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Material 2:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Material2}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Material Weight 2:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{MaterialWeight2}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Material 3:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Material3}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Material Weight 3:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{MaterialWeight3}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Attribute Type:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{AttributeType}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Dimension:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{Dimension}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Choose Stone Type:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{ChooseStoneType}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Choose Stone:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}><img src={`/images/${ChooseStone}`} alt="Choose Stone" /></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Stone Weight:</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{StoneWeight}</td>
          </tr>
          
        </tbody>
      </table>
      <br></br>
      <div>
        <button className="job-button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Cuss;

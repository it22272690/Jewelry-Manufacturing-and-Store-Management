import React, { useState } from "react";
import NavCus from "../NavCus/NavCus";
import { useNavigate } from "react-router";
import axios from "axios";
import "./addcuss.css";
import "./footer.css";
import { FloatingLabel, Form, Button, Row, Col } from "react-bootstrap";
import { Tab, Nav, Container } from 'react-bootstrap';

function AddCuss() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    FirstName: "",
    LastName: "",
    AccountUsername: "",
    MobileNumber: "",
    Address: "",
    City: "",
    Province: "",
    Zip: "",
    OrderNum: "",
    ChooseItem: "",
    ChooseDesign: "",
    NumberOfMaterials: "", // New field
    Materials: [], // Array to store material type and weight
    AttributeType: "",
    Dimension: "",
    ChooseStoneType: "",
    ChooseStone: "",
    StoneWeight: "",
  });

 
  const [key, setKey] = useState("profile");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If ChooseItem changes, reset ChooseDesign
    if (name === "ChooseItem") {
      setInputs({
        ...inputs,
        [name]: value,
        ChooseDesign: "", // Reset ChooseDesign
      });
    } else if (name === "ChooseStoneType") {
      // Corrected this condition to match the stone type name
      setInputs({
        ...inputs,
        [name]: value,
        ChooseStone: "", // Reset stones
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const handleMaterialChange = (index, e) => {
    const { name, value } = e.target;
    const materials = [...inputs.Materials];
    materials[index] = { ...materials[index], [name]: value };
    setInputs({ ...inputs, Materials: materials });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/CusDetails"));
  };

  const sendRequest = async () => {
    try {
  
      await axios.post("http://localhost:5000/cuss", {
        ...inputs,
       
      });
    } catch (error) {
      console.error("Error adding cuss:", error);
    }
  };

 

  // Design mappings for each item type
  const itemDesigns = {
    ring: [
      "ring1.jpg",
      "ring2.jpg",
      "ring3.jpg",
      "ring4.jpg",
      "ring5.jpg",
      "ring6.jpg",
      "ring7.jpg",
      "ring8.jpg",
      "ring9.jpg",
      "ring10.jpg",
      "ring11.jpg",
      "ring12.jpg",
      "ring13.jpg",
      "ring14.jpg",
      "ring15.jpg",
      "ring16.jpg",
    ],
    chain: [
      "chain1.jpg",
      "chain2.jpg",
      "chain3.jpg",
      "chain4.jpg",
      "chain5.jpg",
      "chain6.jpg",
      "chain7.jpg",
      "chain8.jpg",
      "chain9.jpg",
      "chain10.jpg",
      "chain11.jpg",
      "chain12.jpg",
      "chain13.jpg",
      "chain14.jpg",
      "chain15.jpg",
      "chain16.jpg",
    ],
    earring: [
      "earring1.jpg",
      "earring2.jpg",
      "earring3.jpg",
      "earring4.jpg",
      "earring5.jpg",
      "earring6.jpg",
      "earring7.jpg",
      "earring8.jpg",
      "earring9.jpg",
      "earring10.jpg",
      "earring11.jpg",
      "earring12.jpg",
      "earring13.jpg",
      "earring14.jpg",
      "earring15.jpg",
      "earring16.jpg",
    ],
    bracelet: [
      "bracelet1.jpg",
      "bracelet2.jpg",
      "bracelet3.jpg",
      "bracelet4.jpg",
      "bracelet5.jpg",
      "bracelet6.jpg",
      "bracelet7.jpg",
      "bracelet8.jpg",
      "bracelet9.jpg",
      "bracelet10.jpg",
      "bracelet11.jpg",
      "bracelet12.jpg",
    ],
    pendant: [
      "pendant1.jpg",
      "pendant2.jpg",
      "pendant3.jpg",
      "pendant4.jpg",
      "pendant5.jpg",
      "pendant6.jpg",
      "pendant7.jpg",
      "pendant8.jpg",
      "pendant9.jpg",
      "pendant10.jpg",
      "pendant11.jpg",
      "pendant12.jpg",
      "pendant13.jpg",
      "pendant14.jpg",
      "pendant15.jpg",
      "pendant16.jpg",
    ],
    necklace: [
      "necklace1.jpg",
      "necklace2.jpg",
      "necklace3.jpg",
      "necklace4.jpg",
      "necklace5.jpg",
      "necklace6.jpg",
      "necklace7.jpg",
      "necklace8.jpg",
      "necklace9.jpg",
      "necklace10.jpg",
      "necklace11.jpg",
      "necklace312.jpg",
      "necklace13.jpg",
      "necklace14.jpg",
      "necklace15.jpg",
      "necklace16.jpg",
    ],
    bangle: [
      "bangle1.jpg",
      "bangle2.jpg",
      "bangle3.jpg",
      "bangle4.jpg",
      "bangle5.jpg",
      "bangle6.jpg",
      "bangle7.jpg",
      "bangle8.jpg",
      "bangle10.jpg",
      "bangle11.jpg",
      "bangle12.jpg",
      "bangle13.jpg",
    ],
  };

  const stoneTypes = {
    diamond: ["diamond1.jpg", "diamond2.jpg", "diamond3.jpg"],
    gem: ["gem1.jpg", "gem2.jpg", "gem3.jpg"],
    imitation: ["imitation1.jpg", "imitation2.jpg", "imitation3.jpg"],
  };

  
  const renderMaterialFields = () => {
    const { NumberOfMaterials, Materials } = inputs;
    const fields = [];
    for (let i = 0; i < NumberOfMaterials; i++) {
      fields.push(
        <div key={i}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId={`MaterialType${i}`}>
                <Form.Label className="addcus-label">Material Type {i + 1}</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name={`MaterialType${i}`}
                  onChange={(e) => handleMaterialChange(i, e)}
                  value={Materials[i]?.MaterialType || ""}
                  required
                >
                  <option value=""></option>
                  <option value="gold">Gold</option>
                  <option value="palladium">Palladium</option>
                  <option value="silver">Silver</option>
                  <option value="platinum">Platinum</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId={`MaterialWeight${i}`}>
                <Form.Label className="addcus-label">Material Weight {i + 1}</Form.Label>
                <Form.Control
                  type="text"
                  name={`MaterialWeight${i}`}
                  className="addcus-input"
                  onChange={(e) => handleMaterialChange(i, e)}
                  value={Materials[i]?.MaterialWeight || ""}
                  placeholder={`Enter material weight ${i + 1}`}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <br/>
        </div>
      );
    }
    return fields;
  };

  // Function to render design options based on selected item
  const renderDesignOptions = () => {
    const designs = itemDesigns[inputs.ChooseItem] || []; // Get designs for selected item
    return designs.map((design, index) => (
      <label key={index}>
        <Form.Check
          type="radio"
          name="ChooseDesign"
          value={design}
          onChange={handleChange}
        />

        <img src={"images/" + design} alt={`Design ${index + 1}`} />
      </label>
    ));
  };







  // Function to render stone options
  const renderStoneOptions = () => {
    const stones = stoneTypes[inputs.ChooseStoneType] || [];
    return stones.map((stone, index) => (
      <label key={index}>
        <Form.Check
          type="radio"
          name="ChooseStone"
          value={stone}
          onChange={handleChange}
        />
        <img src={"images/" + stone} alt={`Stone ${index + 1}`} />
      </label>
    ));
  };

  return (
    <div className="addcustomizemaincontainer">
      <NavCus />
      <br></br> 
      <br></br>

     
            <header className="header">
                <h1 id="title" className="text-center">Make your own customizing jewelry</h1>
                <p id="description" className="text-center">
                    Thank you for taking the time to help us improve the platform
                </p>
            </header>
                 


            <div className="photo"> 
              <img src="images/cus.jpg" style={{width:'100%'}}></img>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>




            <div className="fcontainer">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp &nbsp
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp &nbsp
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp&nbsp
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <Form id="survey-form" onSubmit={handleSubmit}>
            <h1 style={{fontSize:'25px'}}>Personal details</h1>
            <br/>
  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="FirstName">
        <Form.Label className="addcus-label">First Name</Form.Label>
        <Form.Control
          type="text"
          name="FirstName"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.FirstName}
          placeholder="First name"
          required
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="LastName">
        <Form.Label className="addcus-label">Last Name</Form.Label>
        <Form.Control
          type="text"
          name="LastName"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.LastName}
          placeholder="Last name"
          required
        />
      </Form.Group>
    </Col>
  </Row>

  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="AccountUsername">
        <Form.Label className="addcus-label">Account Username</Form.Label>
        <Form.Control
          type="text"
          name="AccountUsername"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.AccountUsername}
          placeholder="Account username"
          required
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="MobileNumber">
        <Form.Label className="addcus-label">Mobile Number</Form.Label>
        <Form.Control
          type="tel"
          name="MobileNumber"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.MobileNumber}
          placeholder="Mobile number"
          required
        />
      </Form.Group>
    </Col>
  </Row>

  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="Address">
        <Form.Label className="addcus-label">Address</Form.Label>
        <Form.Control
          type="text"
          name="Address"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.Address}
          placeholder="Enter your address"
          required
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="City">
        <Form.Label className="addcus-label">City</Form.Label>
        <Form.Control
          type="text"
          name="City"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.City}
          placeholder="Enter your city"
          required
        />
      </Form.Group>
    </Col>
  </Row>

  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="Province">
        <Form.Label className="addcus-label">Province</Form.Label>
        <Form.Control
                as="select"
                name="Province"
                className="addcus-input"
                onChange={handleChange}
                value={inputs.Province}
                required
              >
                <option>Choose...</option>
                <option value="Central Province">Central Province</option>
                <option value="Eastern Province">Eastern Province</option>
                <option value="North Central Province">
                  North Central Province
                </option>
                <option value="Northern Province">Northern Province</option>
                <option value="North Western Province">
                  North Western Province
                </option>
                <option value="Sabaragamuwa Province">
                  Sabaragamuwa Province
                </option>
                <option value="Southern Province">Southern Province</option>
                <option value="Uva Province">Uva Province</option>
                <option value="Western Province">Western Province</option>
              </Form.Control>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="Zip">
        <Form.Label className="addcus-label">Zip</Form.Label>
        <Form.Control
          type="text"
          name="Zip"
          className="form-control addcus-input"
          onChange={handleChange}
          value={inputs.Zip}
          placeholder="Enter your zip code"
          required
        />
      </Form.Group>
    </Col>
  </Row>
</Form>
        </div>
      </div>
    </div>


















      <Container className="tab-container">
  <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
    <div className="row">
      <div className="col-md-3">
        <Nav variant="pills" className="flex-column nav-pills-custom">
        
          <Nav.Item className="btnHome">
            <Nav.Link eventKey="profile" className="nav-link-custom" style={{color:'white'}}>Design Customizing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="btnHome">
            <Nav.Link eventKey="contact" className="nav-link-custom" style={{color:'white'}}>Stone Customizing</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="col-md-9">
        <Tab.Content  >
          
          <Tab.Pane eventKey="profile" className="tab-pane-custom">
            
          <div className="tabcontainer">
            <header className="header">
                <h1 id="title" className="text-center">Customizing jewelry design</h1>
                
            </header>
                  <div className="form-wrap">
          
                  <Form id="survey-form" onSubmit={handleSubmit}>

        <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="ChooseItem">
                <Form.Label className="addcus-label">Choose Item</Form.Label>
                <Form.Select
                name="ChooseItem"
                className="addcus-input"
                onChange={handleChange}
                value={inputs.ChooseItem}
                required
              >
                <option value="">Select an item</option>
                <option value="ring">Ring</option>
                <option value="chain">Chain</option>
                <option value="earring">Earring</option>
                <option value="bracelet">Bracelet</option>
                <option value="pendant">Pendant</option>
                <option value="necklace">Necklace</option>
                <option value="bangle">Bangle</option>
              </Form.Select>
            </Form.Group>
        </Col>
        </Row>
        <Row className="mb-3">
        
            <Form.Group controlId="ChooseDesign">
            <Form.Label className="addcus-label">
                Choose item design
              </Form.Label>{" "}
              {/*  ChooseDesign */}
              <br />
              <br />
              {/* images for design selection */}
              <div>{renderDesignOptions()}</div>
              <br />
              <br />
               
            </Form.Group>
        
        </Row>
        <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="NumberOfMaterials">
                    <Form.Label className="addcus-label">Number of Materials</Form.Label>
                    <Form.Control
                      type="number"
                      name="NumberOfMaterials"
                      className="form-control addcus-input"
                      onChange={handleChange}
                      value={inputs.NumberOfMaterials}
                      placeholder="Enter number of materials"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* Render Material Fields */}
              {renderMaterialFields()}
              <br />
    <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="AttributeType">
                <Form.Label className="addcus-label">Attribute Type</Form.Label>
                <Form.Control
                    type="text"
                    name="AttributeType"
                    className="addcus-input"
                    onChange={handleChange}
                    value={inputs.AttributeType}
                    placeholder="Enter attribute type"
                    required
                />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="Dimension">
                <Form.Label className="addcus-label">Dimension</Form.Label>
                <Form.Control
                    type="text"
                    name="Dimension"
                    className="addcus-input"
                    onChange={handleChange}
                    value={inputs.Dimension}
                    placeholder="Enter dimension"
                    required
                />
            </Form.Group>
        </Col>
    </Row>
</Form>



            </div>
            </div>
            




          </Tab.Pane>
          <Tab.Pane eventKey="contact" className="tab-pane-custom">

            
          <div className="container">
            <header className="header">
                <h1 id="title" className="text-center"> Customizing your stone</h1>
                
            </header>
                  <div className="form-wrap">
          <Form id="survey-form" onSubmit={handleSubmit}>
    <Form.Group controlId="ChooseStoneType">
        <Form.Label className="addcus-label">Choose Stone Type</Form.Label>
        <Form.Select
                name="ChooseStoneType"
                className="addcus-input"
                onChange={handleChange}
                value={inputs.ChooseStoneType}
                required
              >
                <option value="">Select Stone Type</option>
                <option value="diamond">Diamond</option>
                <option value="gem">Gem</option>
                <option value="imitation">Imitation</option>
              </Form.Select>
    </Form.Group>

    <Form.Group controlId="ChooseStone">
    <Form.Label className="addcus-label">
                Choose Stone
              </Form.Label>{" "}
              {/*  ChooseStone */}
              <br />
              <br />
              <div>{renderStoneOptions()}</div>
              
    </Form.Group>

    <Form.Group controlId="StoneWeight">
        <Form.Label className="addcus-label">Stone Weight</Form.Label>
        <Form.Control
            type="text"
            name="StoneWeight"
            className="addcus-input"
            onChange={handleChange}
            value={inputs.StoneWeight}
            placeholder="Enter stone weight"
            required
        />
    </Form.Group>

    <br/>
    <button className = "submitButton" variant="success" type="submit">
                Place Order
              </button>
</Form>

</div>
</div>

          </Tab.Pane>
        </Tab.Content>
      </div>
    </div>
  </Tab.Container>
</Container>














<br/>
<br/>
<br/>





<div className="footer">
      <footer className="footernew">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text" style={{background: '#c27846'}}>LOGO</span>
                <h1 >Daimonds.lk</h1>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Start</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Documentation</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Contact</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">News</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#">Customers</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's Chat</h2>
              <p className="footer-call-to-action-description"> Have a support question?</p>
              <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
            </div>
          </div>
          <div className="footer-social-links"> 
            <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
              <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
            </svg>
            <a className="footer-social-link linkedin" href="#" target="_blank">
              <span className="hidden-link-text">Linkedin</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
              </svg>
            </a>
            <a className="footer-social-link twitter" href="#" target="_blank">
              <span className="hidden-link-text">Twitter</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <path className="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
              </svg>
            </a>
            <a className="footer-social-link youtube" href="#" target="_blank">
              <span className="hidden-link-text">Youtube</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path className="footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
            <a className="footer-social-link github" href="#" target="_blank">
              <span className="hidden-link-text">Github</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path className="footer-social-icon-path" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">© 2023 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>





















      







     </div>
  );
}

export default AddCuss;

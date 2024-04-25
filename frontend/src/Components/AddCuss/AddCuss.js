import React, { useState } from "react";
import NavCus from "../NavCus/NavCus";
import { useNavigate } from "react-router";
import axios from "axios";
import "./addcuss.css";
import "./footer.css";
import {  Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';




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
    Material1: "",
    MaterialWeight1: "",
    Material2: "",
    MaterialWeight2: "",
    Material3: "",
    MaterialWeight3: "",
    AttributeType: "",
    Dimension: "",
    ChooseStoneType: "",
    ChooseStone: "",
    StoneWeight: "",
  });

  // Prices of materials
  const materialPrices = {
    gold: 160000,
    platinum: 200000,
    silver: 50000,
    palladium: 120000,
  };

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

  const [key, setKey] = useState("home");

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
    <div className="addcus-container">

<div className="main-container">
      <NavCus />
      <br></br> 
      <br></br>

     
            <header className="header">
                <h1 id="title" className="text-center">Make your own customizing jewelry</h1>
               
            </header>
                 

            <div className="photo"> 
              <img src="images/16774.jpg"></img>
              </div>




      <Container className="tab-container">
  <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
    <div className="row">
      <div className="col-md-3">
        <Nav variant="pills" className="flex-column nav-pills-custom">
          <Nav.Item className="btnHome1">
            <Nav.Link eventKey="home" className="nav-link-custom">Persanol Details</Nav.Link>
          </Nav.Item>
          <Nav.Item className="btnHome">
            <Nav.Link eventKey="profile" className="nav-link-custom">Design Customizing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="btnHome">
            <Nav.Link eventKey="contact" className="nav-link-custom">Stone Customizing</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="col-md-9">
        <Tab.Content>
          <Tab.Pane eventKey="home" className="tab-pane-custom">
            
          <div className="container">
            <header className="header">
                <h1 id="title" className="text-center">Enter Persanol Details</h1>
                
            </header>
                  <div className="form-wrap">
                  <Form id="survey-form" onSubmit={handleSubmit}>
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
          placeholder="Enter your first name"
          pattern="[a-zA-Z]+"
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
          placeholder="Enter your last name"
          pattern="[a-zA-Z]+"
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
          placeholder="Enter your account username"
          pattern="[A-Za-z0-9]+"
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
          placeholder="Enter your mobile number"
          pattern="^0\d{9}$"
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
          pattern="[A-Za-z0-9]+"
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
          pattern="[a-zA-Z]+"
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
          pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
          required
        />
      </Form.Group>
    </Col>
  </Row>
</Form>


            </div>
            </div>

          </Tab.Pane>
          <Tab.Pane eventKey="profile" className="tab-pane-custom">
            
            


          <div className="container">
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
   
        <Form.Group controlId="Material1">
            <Form.Label className="addcus-label">Material 1</Form.Label>
            <Form.Select
                      aria-label="Floating label select example"
                      name="Material1"
                      onChange={handleChange}
                      value={inputs.Material1}
                      required
                    >
                      <option></option>
                      <option value="gold">Gold</option>
                      <option value="palladium">Palladium</option>
                      <option value="silver">Silver</option>
                      <option value="platinum">Platinum</option>
                    </Form.Select>
        </Form.Group>
    
    
        <Form.Group controlId="MaterialWeight1">
            <Form.Label className="addcus-label">Material Weight 1</Form.Label>
            <Form.Control
                type="text"
                name="MaterialWeight1"
                className="addcus-input"
                onChange={handleChange}
                value={inputs.MaterialWeight1}
                placeholder="Enter material weight 1"
                pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
                required
            />
        </Form.Group>
  
</Row>

    <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="Material2">
                <Form.Label className="addcus-label">Material 2</Form.Label>
                <Form.Select
                      aria-label="Floating label select example"
                      name="Material2"
                      onChange={handleChange}
                      value={inputs.Material2}
                      required
                    >
                      <option></option>
                      <option value="gold">Gold</option>
                      <option value="palladium">Palladium</option>
                      <option value="silver">Silver</option>
                      <option value="platinum">Platinum</option>
                      <option value="none">None</option>
                    </Form.Select>
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="MaterialWeight2">
                <Form.Label className="addcus-label">Material Weight 2</Form.Label>
                <Form.Control
                    type="text"
                    name="MaterialWeight2"
                    className="addcus-input"
                    onChange={handleChange}
                    value={inputs.MaterialWeight2}
                    placeholder="Enter material weight 2"
                    pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
                    required
                />
            </Form.Group>
        </Col>
    </Row>

    <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="Material3">
                <Form.Label className="addcus-label">Material 3</Form.Label>
                <Form.Select
                      aria-label="Floating label select example"
                      name="Material3"
                      onChange={handleChange}
                      value={inputs.Material3}
                      required
                    >
                      <option></option>
                      <option value="gold">Gold</option>
                      <option value="palladium">Palladium</option>
                      <option value="silver">Silver</option>
                      <option value="platinum">Platinum</option>
                      <option value="none">None</option>
                    </Form.Select>
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="MaterialWeight3">
                <Form.Label className="addcus-label">Material Weight 3</Form.Label>
                <Form.Control
                    type="text"
                    name="MaterialWeight3"
                    className="addcus-input"
                    onChange={handleChange}
                    value={inputs.MaterialWeight3}
                    placeholder="Enter material weight 3"
                    pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
                    required
                />
            </Form.Group>
        </Col>
    </Row>

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
                    pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
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
            pattern="^(?!-)[0-9]+(\.[0-9]+)?$"
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




</div>




  <Link to="/Video" className ="video">
  <button className="video">
    Video Call
    </button>
    </Link>






<br/>
<br/>
<br/>





      





















      
<div className="footer">
        <div className="fotter-container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Simply dummy text</a></li>
                  <li><a href="#">The printing and typesetting </a></li>
                  <li><a href="#">Standard dummy text</a></li>
                  <li><a href="#">Type specimen book</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Page Link</h4>
                <ul>
                  <li><a href="#">Lorem Ipsum</a></li>
                  <li><a href="#">Simply dummy text</a></li>
                  <li><a href="#">The printing and typesetting </a></li>
                  <li><a href="#">Standard dummy text</a></li>
                  <li><a href="#">Type specimen book</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
              <div className="social_profile">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">Copyright © 2019 <a href="#">Daimonds.lk</a>.</p>
            </div>
          </div>
        </div>
      </div>







     </div>
     
  );
}

export default AddCuss;

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Cuss from "../Cuss/Cuss";
import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin

function CusDetails() {
  const [cuss, setCuss] = useState([]);
  useEffect(() => {
    fetchHandler();
  }, []);

  const ComponentsRef = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler();
  };

  const fetchHandler = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cuss");
      setCuss(response.data.cuss);
      setNoResults(response.data.cuss.length === 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF({
        orientation: 'landscape',
        format: 'a2'
    });
    const tableRows = [];
    const columns = ["ID", "First Name", "Last Name", "Account Username", "Mobile Number", "Address", "City", "Province", "Zip", "Order Number", "Choose Item", "Choose Design", "Material 1", "Material Weight 1", "Material 2", "Material Weight 2", "Material 3", "Material Weight 3", "Attribute Type", "Dimension", "Choose Stone Type", "Choose Stone", "Stone Weight"];

    cuss.forEach((cus) => {
        const row = [];
        Object.values(cus).forEach((value) => {
            row.push(value.toString());
        });
        tableRows.push(row);
    });

    doc.autoTable({
        head: [columns],
        body: tableRows,
    });

    doc.save("Cuss_Report.pdf");
};


  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", color: "#333", padding: "20px" }}>
      <h2>Cus Details Display Page</h2>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search User Details"
          style={{
            borderRadius: "10px",
            padding: "10px",
            marginRight: "10px",
            cursor: "pointer",
            width: "400px",
            height: "30px",
            marginTop:"50px",
            marginBottom :"30px",
            fontSize:"20px",
          }}
        />
        <Button
          onClick={handleSearch}
          style={{
            backgroundColor: "hsl(122, 39%, 49%)",
            borderRadius: "8px",
            color: "#333",
            padding: "20px 30px",
            border: "none",
            cursor: "pointer",
            fontSize:"20px",
          }}
        >
          Search
        </Button>
      </div>

      {noResults ? (
        <div >
          <p>No cuss Found</p>
        </div>
      ) : (
        <div id="table-container" ref={ComponentsRef} >
          {cuss.map((cus, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <Cuss cus={cus} />
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          onClick={handleDownloadReport}
          style={{
            backgroundColor: "#4CAF50",
            borderRadius: "8px",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            fontSize:"20px",
          }}
        >
          Download Report
        </Button>
      </div>
    </div>
  );
}

export default CusDetails;

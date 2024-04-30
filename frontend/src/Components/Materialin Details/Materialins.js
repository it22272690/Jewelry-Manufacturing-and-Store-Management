import NavMI from "../NavMI/NavMI.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Materialin from "../Materialin/Materialin";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const URL = "http://localhost:5000/materialins";
const MATERIALINS_PER_PAGE = 5;

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  cell: {
    width: '20%',
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold', // Add bold style here
  },
});

function Materialins() {
  const [materialins, setMaterialins] = useState([]);
  const [filteredMaterialins, setFilteredMaterialins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setNoResults] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); // State to track sorting order
  const [showAll, setShowAll] = useState(false); // State to track whether to show all data

  useEffect(() => {
    fetchHandler().then((data) => {
      setMaterialins(data.materialins);
      setFilteredMaterialins(data.materialins);
      setTotalPages(Math.ceil(data.materialins.length / MATERIALINS_PER_PAGE));
    });
  }, []);

  const handleSearch = (query) => {
    const filtered = materialins.filter((materialin) => {
      return Object.values(materialin).some((val) =>
        val.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredMaterialins(filtered);
    setCurrentPage(1);
    setTotalPages(Math.ceil(filtered.length / MATERIALINS_PER_PAGE));
    setNoResults(filtered.length === 0);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = () => {
    const sortedMaterialins = [...filteredMaterialins].sort((a, b) => {
      const nameA = a.materialinID.toLowerCase();
      const nameB = b.materialinID.toLowerCase();
      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFilteredMaterialins(sortedMaterialins);
    setSortOrder((order) => (order === "asc" ? "desc" : "asc")); // Toggle sorting order
  };

  const paginateMaterialins = () => {
    const startIndex = (currentPage - 1) * MATERIALINS_PER_PAGE;
    const endIndex = startIndex + MATERIALINS_PER_PAGE;
    return filteredMaterialins.slice(startIndex, endIndex);
  };

  const handleViewAll = () => {
    setShowAll(true); // Set showAll state to true to display all data
  };

  return (
    <div >
      <NavMI />
      <center>
        <h1>Materialin Details Display Page</h1>
      </center>

      <div style={{ textAlign: "center" }}>
        <input
          onChange={handleInputChange}
          type="text"
          name="search"
          placeholder="Search Materialin Details"
          style={{
            borderRadius: "8px",
            padding: "10px",
            marginRight: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />
      </div>

      <br />

      {noResults ? (
        <div>
          <p>No Materialins Found</p>
        </div>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th onClick={handleSort} style={{ cursor: "pointer" }}>
                MaterialinID {sortOrder === "asc" ? "↑" : "↓"} {/* Display arrow based on sorting order */}
                </th>
                <th>SupplierID</th>
                <th>Date</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Pladium</th>
                <th>Platinum</th>
                <th>Thai Ruby</th>
                <th>Burmese Ruby</th>
                <th>Blue Sapphire</th>
                <th>Purple Sapphire</th>
                <th>Star Sapphire</th>
                <th>White Sapphire</th>
                <th>Blood Diamond</th>
                <th>Pink star Diamond</th>
                <th>Regent Diamond</th>
                <th>Colombian Aquamarine</th>
                <th>Madagascar Aquamarine</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {showAll ? (
                // Render all materialins if showAll is true
                materialins.map((materialin, i) => (
                  <Materialin key={i} materialin={materialin} />
                ))
              ) : (
                // Otherwise, paginate the materialins
                paginateMaterialins().map((materialin, i) => (
                  <Materialin key={i} materialin={materialin} />
                ))
              )}
            </tbody>
          </table>
          <PDFDownloadLink document={
            <Document>
              <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>Diamonds.lk-Jewelry Manufacture and Management System<br/><br/></Text>
                <View style={styles.row}>
                <Text style={styles.cell}>MaterialinID</Text>
                  <Text style={styles.cell}>SupplierID</Text>
                  <Text style={styles.cell}>Date</Text>
                  <Text style={styles.cell}>Gold</Text>
                  <Text style={styles.cell}>Silver</Text>
                  <Text style={styles.cell}>Pladium</Text>
                  <Text style={styles.cell}>Platinum</Text>
                  <Text style={styles.cell}>Thai Ruby</Text>
                  <Text style={styles.cell}>Burmese Ruby</Text>
                  <Text style={styles.cell}>Blue Sapphire</Text>
                  <Text style={styles.cell}>Purple Sapphire</Text>
                  <Text style={styles.cell}>Star Sapphire</Text>
                  <Text style={styles.cell}>White Sapphire</Text>
                  <Text style={styles.cell}>Blood Diamond</Text>
                  <Text style={styles.cell}>Pink star Diamond</Text>
                  <Text style={styles.cell}>Regent Diamond</Text>
                  <Text style={styles.cell}>Colombian Aquamarine</Text>
                  <Text style={styles.cell}>Madagascar Aquamarine</Text>
                  <Text style={styles.cell}>Value</Text>
                </View>
                {showAll ? (
                  // Render all materialins if showAll is true
                  materialins.map((materialin, i) => (
                    <View key={i} style={styles.row}>
                      <Text style={styles.cell}>{materialin.materialinID}</Text>
                      <Text style={styles.cell}>{materialin.supplierID}</Text>
                      <Text style={styles.cell}>{materialin.date}</Text>
                      <Text style={styles.cell}>{materialin.gold}</Text>
                      <Text style={styles.cell}>{materialin.silver}</Text>
                      <Text style={styles.cell}>{materialin.pladium}</Text>
                      <Text style={styles.cell}>{materialin.platinum}</Text>
                      <Text style={styles.cell}>{materialin.thairuby}</Text>
                      <Text style={styles.cell}>{materialin.burmeseruby}</Text>
                      <Text style={styles.cell}>{materialin.bluesapphire}</Text>
                      <Text style={styles.cell}>{materialin.purplesapphire}</Text>
                      <Text style={styles.cell}>{materialin.starsapphire}</Text>
                      <Text style={styles.cell}>{materialin.whitesapphire}</Text>
                      <Text style={styles.cell}>{materialin.blooddiamond}</Text>
                      <Text style={styles.cell}>{materialin.pinkstardiamond}</Text>
                      <Text style={styles.cell}>{materialin.regentdiamond}</Text>
                      <Text style={styles.cell}>{materialin.colombianaquamarine}</Text>
                      <Text style={styles.cell}>{materialin.madagascaraquamarine}</Text>
                      <Text style={styles.cell}>{materialin.value}</Text>
                    </View>
                  ))
                ) : (
                  // Otherwise, paginate the users
                  paginateMaterialins().map((materialin, i) => (
                    <View key={i} style={styles.row}>
                      <Text style={styles.cell}>{materialin.materialinID}</Text>
                      <Text style={styles.cell}>{materialin.supplierID}</Text>
                      <Text style={styles.cell}>{materialin.date}</Text>
                      <Text style={styles.cell}>{materialin.gold}</Text>
                      <Text style={styles.cell}>{materialin.silver}</Text>
                      <Text style={styles.cell}>{materialin.pladium}</Text>
                      <Text style={styles.cell}>{materialin.platinum}</Text>
                      <Text style={styles.cell}>{materialin.thairuby}</Text>
                      <Text style={styles.cell}>{materialin.burmeseruby}</Text>
                      <Text style={styles.cell}>{materialin.bluesapphire}</Text>
                      <Text style={styles.cell}>{materialin.purplesapphire}</Text>
                      <Text style={styles.cell}>{materialin.starsapphire}</Text>
                      <Text style={styles.cell}>{materialin.whitesapphire}</Text>
                      <Text style={styles.cell}>{materialin.blooddiamond}</Text>
                      <Text style={styles.cell}>{materialin.pinkstardiamond}</Text>
                      <Text style={styles.cell}>{materialin.regentdiamond}</Text>
                      <Text style={styles.cell}>{materialin.colombianaquamarine}</Text>
                      <Text style={styles.cell}>{materialin.madagascaraquamarine}</Text>
                      <Text style={styles.cell}>{materialin.value}</Text>
                    </View>
                  ))
                )}
              </Page>
            </Document>
          } fileName="materialin_report.pdf">
            {({ blob, url, loading, error }) => (
              <button disabled={loading}>{loading ? 'Generating PDF...' : 'Download PDF'}</button>
            )}
          </PDFDownloadLink>
          <button onClick={handleViewAll}>View All</button> {/* Button to view all data */}
        </div>
      )}
      <br />
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || noResults} // Disable button when there are no results
        >
          Next
        </button>
      </div>
      <br />
    </div>
  );
}

export default Materialins;

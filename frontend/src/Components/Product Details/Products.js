import NavP from "../NavP/NavP.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const URL = "http://localhost:5000/products";
const PRODUCTS_PER_PAGE = 5;

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

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setNoResults] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); // State to track sorting order
  const [showAll, setShowAll] = useState(false); // State to track whether to show all data

  useEffect(() => {
    fetchHandler().then((data) => {
      setProducts(data.products);
      setFilteredProducts(data.products);
      setTotalPages(Math.ceil(data.products.length / PRODUCTS_PER_PAGE));
    });
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) => {
      return Object.values(product).some((val) =>
        val.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredProducts(filtered);
    setCurrentPage(1);
    setTotalPages(Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
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
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
    setSortOrder((order) => (order === "asc" ? "desc" : "asc")); // Toggle sorting order
  };

  const paginateProducts = () => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handleViewAll = () => {
    setShowAll(true); // Set showAll state to true to display all data
  };

  return (
    <div style={{ fontFamily: "arial" }}>
      <NavP />
      <center>
        <h1>Product Details Display Page</h1>
      </center>

      <div style={{ textAlign: "center" }}>
        <input
          onChange={handleInputChange}
          type="text"
          name="search"
          placeholder="Search Product Details"
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
          <p>No Products Found</p>
        </div>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>ProductID</th>
                <th onClick={handleSort} style={{ cursor: "pointer" }}>
                  Name {sortOrder === "asc" ? "↑" : "↓"} {/* Display arrow based on sorting order */}
                </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {showAll ? (
                // Render all products if showAll is true
                products.map((product, i) => (
                  <Product key={i} product={product} />
                ))
              ) : (
                // Otherwise, paginate the products
                paginateProducts().map((product, i) => (
                  <Product key={i} product={product} />
                ))
              )}
            </tbody>
          </table>
          <PDFDownloadLink document={
            <Document>
              <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>Diamonds.lk-Jewelry Manufacture and Management System<br/><br/></Text>
                <View style={styles.row}>
                  <Text style={styles.cell}>ProductID</Text>
                  <Text style={styles.cell}>Name</Text>
                  <Text style={styles.cell}>Price</Text>
                  <Text style={styles.cell}>Quantity</Text>
                  <Text style={styles.cell}>Description</Text>
                </View>
                {showAll ? (
                  // Render all products if showAll is true
                  products.map((product, i) => (
                    <View key={i} style={styles.row}>
                      <Text style={styles.cell}>{product.productID}</Text>
                      <Text style={styles.cell}>{product.name}</Text>
                      <Text style={styles.cell}>{product.price}</Text>
                      <Text style={styles.cell}>{product.quantity}</Text>
                      <Text style={styles.cell}>{product.description}</Text>
                    </View>
                  ))
                ) : (
                  // Otherwise, paginate the products
                  paginateProducts().map((product, i) => (
                    <View key={i} style={styles.row}>
                      <Text style={styles.cell}>{product.productID}</Text>
                      <Text style={styles.cell}>{product.name}</Text>
                      <Text style={styles.cell}>{product.price}</Text>
                      <Text style={styles.cell}>{product.quantity}</Text>
                      <Text style={styles.cell}>{product.description}</Text>
                    </View>
                  ))
                )}
              </Page>
            </Document>
          } fileName="product_report.pdf">
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

export default Products;

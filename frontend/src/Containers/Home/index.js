import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import Header from '../../Components/Layout/Header';
import './style.css';
import axios from 'axios';
import { signout } from '../../actions/user.actions';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showBigButtons, setShowBigButtons] = useState(true);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showAdminDetails, setshowAdminDetails] = useState(false);
  const [users, setCustomers] = useState([]);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const fetchAdminDetails = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const adminId = localStorage.getItem('id');
      const response = await axios.get(`http://localhost:5000/users/${adminId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
      setUpdatedUser(response.data.user);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Token expired or unauthorized:', error.response);
        alert('Your session has expired. Please login again.');
        dispatch(signout());
      } else {
        console.error('Error fetching admin details:', error.response);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const adminId = user._id.toString();
      await axios.put(`http://localhost:5000/users/${adminId}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await fetchAdminDetails();
      setIsEditing(false);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Token expired or unauthorized:', error.response);
        alert('Your session has expired. Please login again.');
        dispatch(signout());
      } else {
        console.error('Error updating customer details:', error.response);
      }
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const adminId = user._id.toString();
      await axios.delete(`http://localhost:5000/users/${adminId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Account deleted successfully');
      logout();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Token expired or unauthorized:', error.response);
        alert('Your session has expired. Please login again.');
        dispatch(signout());
      } else {
        console.error('Error deleting customer account:', error.response);
      }
    }
  };

  const handleNoButtonClick = () => {
    setShowDeleteConfirmation(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSidebarButtonClick = (title) => {
    if (title === "Dashboard") {
      setShowBigButtons(true);
      setShowCustomerDetails(false);
      setshowAdminDetails (false);
    } else if (title === "Customers") {
      setShowBigButtons(false);
      fetchCustomerDetails();
      setshowAdminDetails (false);
    } else if (title === "Account Details") {
      setShowBigButtons(false);
      setShowCustomerDetails(false);
      setshowAdminDetails (true);
      fetchAdminDetails(); // Fetch admin details when "Account Details" button is clicked
    }
  };

  const fetchCustomerDetails = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await axios.get(`http://localhost:5000/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const customersData = response.data.users.filter(user => user.role === "customer");
  
      setCustomers(customersData);
      setShowCustomerDetails(true);
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };

  
  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <div className="dashboard">
        <div className="sidebar">
          <ul>
            <p align='center' className="name">{user ? user.name : 'Admin'}</p>
            <li><button onClick={() => handleSidebarButtonClick("Dashboard")}>Dashboard</button></li>
            <li><button onClick={() =>  handleSidebarButtonClick("Customers") }>Customers</button></li>
            <li><button onClick={() =>  handleSidebarButtonClick("Account Details") }>Account Details</button></li>
            <li><button onClick={() => handleSidebarButtonClick("Settings")}>Settings</button></li>
            <li><button onClick={() => { setShowDeleteConfirmation(true); handleSidebarButtonClick("Delete Account") }}>Delete Account</button></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>
       

        {showBigButtons ? (
          <div className="bigButtons">
            <div className="buttonContainer">
              <p className='summary'>From your account dashboard you can view your recent orders,<br/> manage your wishlist and track production status,<br/> and edit your password and account details.</p>
              <div className="buttonRow">
                <button>Orders</button>
                <button>Account Details</button>
                <button>Wishlist</button>
              </div>
              <div className="buttonRow">
                <button>Recommendations</button>
                <button>Production status</button>
                <button>Logout</button>
              </div>
            </div>
          </div>
        ) : null}
        {showAdminDetails ?(
         <div className="container">
            <div className="customer-details">
              <h2>My Account</h2><br/>
              {user && (
                <div>
                  <div className="row">
                    <div className="detail">
                      <label>Name:</label>
                      {isEditing ? <input type="text" name="name" value={updatedUser.name} onChange={handleChange} /> : <span>{user.name}</span>}
                    </div>
                    <div className="detail">
                      <label>DOB:</label>
                      {isEditing ? <input type="text" name="DOB" value={updatedUser.DOB} onChange={handleChange} /> : <span>{user.DOB}</span>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="detail">
                      <label>Address:</label>
                      {isEditing ? <input type="text" name="address" value={updatedUser.address} onChange={handleChange} /> : <span>{user.address}</span>}
                    </div>
                    <div className="detail">
                      <label>PhoneNumber:</label>
                      {isEditing ? <input type="text" name="phoneNumber" value={updatedUser.phoneNumber} onChange={handleChange} /> : <span>{user.phoneNumber}</span>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="detail">
                      <label>Email:</label>
                      {isEditing ? <input type="text" name="email" value={updatedUser.email} onChange={handleChange} /> : <span>{user.email}</span>}
                    </div>
                    <div className="detail">
                      <label>Username:</label>
                      {isEditing ? <input type="text" name="username" value={updatedUser.username} onChange={handleChange} /> : <span>{user.username}</span>}
                    </div>
                  </div>
  
                  {showDeleteConfirmation ? (
                    <div>
                      <p>Are you sure you want to delete your account?</p>
                      <button className="deleteButton" onClick={handleDeleteAccount}>Delete</button>
                      <button className="noButton" onClick={handleNoButtonClick}>No</button>
                    </div>
                  ) : (
                    isEditing ? (
                      <button className="saveButton" onClick={handleUpdate}>Save Changes</button>
                    ) : (
                      <button className="editButton" onClick={() => setIsEditing(true)}>Update Details</button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
 ):null}
        {showCustomerDetails && users && users.length > 0 && (
          
  <div className="container">
    
    <table className="customer-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>DOB</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((customer) => (
          <tr key={customer._id}>
            <td>{customer.name}</td>
            <td>{customer.address}</td>
            <td>{customer.DOB}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.email}</td>
        
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

      </div>
    </div>
  );
}

export default AdminDashboard;

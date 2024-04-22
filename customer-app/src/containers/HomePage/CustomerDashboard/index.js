import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { useDispatch} from "react-redux";
import { signout } from '../../../actions/user.action';



const CustomerDashboard = () => {
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Welcome!"); // State for the header title
  const [showBigButtons, setShowBigButtons] = useState(true); // State to control rendering of big buttons, initialized to true
  const history = useNavigate();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  }

  const fetchCustomerDetails = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const customerId = localStorage.getItem('id');
      const response = await axios.get(`http://localhost:5000/users/${customerId}`, {
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
        console.error('Error fetching customer details:', error.response);
      }
    }
  };

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const customerId = user._id.toString();
      await axios.put(`http://localhost:5000/users/${customerId}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await fetchCustomerDetails();
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
      const customerId = user._id.toString();
      await axios.delete(`http://localhost:5000/users/${customerId}`, {
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
    setHeaderTitle(title); 
    if (title === "Dashboard") {
      setShowBigButtons(true); 
    } else {
      setShowBigButtons(false);
    }
  };
  const handleProductionStatusClick = () => {
   
   
    history(`/room/roomId`);
  };
  return (
    <div>
      <header className="header">
        <h1>{headerTitle}</h1>
      </header>
      <div className="dashboard">
        <div className="sidebar">
          <ul>
            <p align='center' className="name">{user ? user.name : 'Customer'}</p>
            <li><button onClick={() => handleSidebarButtonClick("Dashboard")}>Dashboard</button></li>
            <li><button onClick={() => handleSidebarButtonClick("Orders")}>Orders</button></li>
            <li><button onClick={() => { fetchCustomerDetails(); handleSidebarButtonClick("Account Details") }}>Account Details</button></li>
            <li><button onClick={() => handleSidebarButtonClick("Settings")}>Settings</button></li>
            <li><button onClick={() => { setShowDeleteConfirmation(true); handleSidebarButtonClick("Delete Account") }}>Delete Account</button></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </div>

        {showBigButtons ? (
          <div className="bigButtons">
            <div className="buttonContainer">
              <p className='summary'>From your account dashboard you can view your recent orders,<br/> manage your wishlist and track production status.</p>
              <div className="buttonRow">
                <button>Orders</button>
             
                <button>Wishlist</button>
              </div>
              <div className="buttonRow">
               
                <button onClick={handleProductionStatusClick}>Production status</button>
                
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default CustomerDashboard;

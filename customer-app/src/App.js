import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CustomerDashboard from './containers/HomePage/CustomerDashboard'; // Import CustomerDashboard component
import Room from "./Room/Room";
import VideoRoom from "./VideoRoom/VideoRoom";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from './actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);

  useEffect(() => {
    setIsLoggedIn(auth.authenticate);
  }, [auth.authenticate]);

  return (
    
    <Router>
      
      <AppContent isLoggedIn={isLoggedIn} />
      <Routes>
      <Route path="/room/roomId" element={<Room/>}>
     
      </Route>
      <Route path="/room/:roomId" element={<VideoRoom/>}>
        </Route>
      </Routes>
    </Router>
  );
}

function AppContent({ isLoggedIn }) {
  const location = useLocation();
  const isRoomRoute = location.pathname.startsWith("/room/");
  return (
    <div className="App">
      {/* Render the Header only if the user is logged in and not on the Customer Dashboard */}
      { location.pathname !== '/customer/dashboard' && !isRoomRoute && <Header />}
      <Routes>
     
      <Route path="/" element={isLoggedIn ?<Navigate to="/customer/dashboard" /> : <Navigate to="/" />} />
        <Route path="/customer/dashboard" element={isLoggedIn ? <CustomerDashboard /> : <Navigate to="/" /> && <Header/>} />
      </Routes>
    </div>
  );
}



export default App;

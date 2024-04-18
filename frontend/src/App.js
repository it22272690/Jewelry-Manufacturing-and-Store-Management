// App.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home";
import Signin from "./Containers/Signin";
import Signup from "./Containers/Signup";
import { useDispatch, useSelector } from "react-redux";
import {isUserLoggedIn} from './actions';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin/signup" element={<Signup />} />
        <Route path="/signup/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;

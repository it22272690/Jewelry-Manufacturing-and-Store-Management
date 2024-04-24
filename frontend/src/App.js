import React from 'react';
import { Route, Routes } from "react-router";
import './App.css';
import Home from './Components/HomeCuss';
import CusDetails from './Components/CusDetails/CusDetails';
import AddCuss from './Components/AddCuss/AddCuss';
import UpdateCuss from './Components/UpdateCuss/UpdateCuss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from "./Components/Video";
import RoomPage from "./Components/Room";



function App() {
  return ( 
     <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/AddCuss" element={<AddCuss />} />
          <Route path="/CusDetails" element={<CusDetails />} />
          <Route path="/CusDetails/:id" element={<UpdateCuss />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

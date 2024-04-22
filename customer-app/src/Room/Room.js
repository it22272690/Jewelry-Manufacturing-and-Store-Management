import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Room.css';
function Home() {
  const [roomId, setRoomId] = useState(""); // Initialize roomId with an empty string
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <main className='Main'>
    <h1 className='id'>Enter the Room ID to join the meeting</h1>
      <input className='input1'
        type="text"
        placeholder="Enter room Id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)} // Update roomId when the input value changes
      />
      <button onClick={handleJoin} className='join'>Join</button>
    </main>
  );
}

export default Home;

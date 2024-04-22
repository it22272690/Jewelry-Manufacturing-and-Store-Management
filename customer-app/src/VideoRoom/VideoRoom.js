import React, { useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";
import './style.css';

export default function VideoRoom() {
  const navigate = useNavigate();
  const { roomId } = useParams();
  
  useEffect(() => {
    async function meetingUI(element) {
      const appId = 1286058408;
      const serverSecret = "3618c5e7d18fa505ae19b4a02890472e";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomId,
        v4(),
        "Your Name"
      );

      const ui = ZegoUIKitPrebuilt.create(kitToken);

      ui.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference
        }
      });
    }

    const containerElement = document.getElementById("meeting-container");
    if (containerElement) {
      meetingUI(containerElement);
    }
  }, [roomId]);
 const goToDashboard = () => {
    navigate("/customer/dashboard");
  };
return (
    <div>
      <h2 className='room'>Room {roomId}</h2>
      <div id="meeting-container"></div>
      <button onClick={goToDashboard} className='dashbutton'>Return to Dashboard</button>
    </div>
  );
}
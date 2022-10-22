import React from 'react'
import device from "../assets/device.png";
import "./Component4.css";
import video1 from "../assets/video1.mp4"

const Component4 = () => {
  return (
    
         <div className="section4">
      <div className="Device_card">
        <div><h1>Watch everywhere.</h1></div>
        <div><p>
        Stream unlimited movies and TV shows on<span></span> your phone, tablet, laptop, and TV.</p>
        </div>
      </div>

      <div className="device_card">
        <div><img className="Device" src={device} alt=""/></div>
       <div><video className="Device_video" src={video1} autoPlay loop muted></video></div>
      </div>
    </div>
  );


}

export default Component4
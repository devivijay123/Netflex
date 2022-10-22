import React from "react";
import Tv from "../assets/tv.png";
import "./Component1.css";
import video2 from "../assets/video2.mp4"
const Component1 = () => {
  return (
    <div className="section1">
      <div className="Tvcard">
        <div><h1>Enjoy on your TV.</h1></div>
        <div><p>
          Watch on smart TVs PlayStation Xbox<span></span> Chromecast Apple TV
          Blu-ray players and<span></span> more.</p>
        </div>
      </div>

      <div className="tvcard">
        <div><img className="TV" src={Tv} alt=""/></div>
       <div><video className="TV_video" src={video2} autoPlay loop muted></video></div>
      </div>
    </div>
  );
};

export default Component1;

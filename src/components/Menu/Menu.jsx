import React from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoUnd from "./UNDelta-inscripcion-carrerasABRIL-2025_v2-HORIZ.mp4";

function Menu() {
  return (
    <div className="video-container">
      <video
        src={VideoUnd}
        autoPlay
        muted
        playsInline
        loop
        className="fullscreen-video"
      ></video>
    </div>
  );
}

export default Menu;

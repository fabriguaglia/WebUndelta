import React from 'react'
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoUnd from "./UNDelta-inscripcion-carrerasABRIL-2025_v2-HORIZ.mp4"

function Menu() {
  return (
    <div>
        <video src={VideoUnd} class="object-fit-fill" autoplay></video>
    </div>
  )
}

export default Menu
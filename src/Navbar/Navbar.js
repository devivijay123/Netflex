import React from 'react'
import img from '../assets/logo.png'
import "../Navbar/Navbar.css"
import imgn from '../assets/globe.png' 

function Navbar() {
  return (
    <div className='nav'>
    <div className='img'>
        <img src={img}/>
       </div> 
       <div className='buttons'>
       <button id="b1"><img src={imgn}/>
       <div id="google_translate_element">
       
       </div>
       </button>
       <button id="b2">Sign in</button>

       </div>
    </div>
  )
}

export default Navbar
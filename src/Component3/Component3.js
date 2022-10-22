import React from 'react'
import boxshot from '../assets/boxshot.png'
import image from '../assets/image.jpg'
import checkbox from '../assets/checkbox.png'
import'./Component3.css'


const Component3 = () => {
  return (
    <div className='section3_container'>
        <div className='left'>
            <div className='left_image'><img src={image} alt=''/></div>
            <div className='left_box'>
            <div className='left_boxshot'><img src={boxshot} alt=''/></div>
            <div className='text'><h4>Stranger Things</h4>
            <p>Downloading...</p></div>
            <div className='left_checkbox'><img src={checkbox} alt=''/></div>  
            </div>
        </div>
        <div className='right'>
        <h1>Download your shows<span></span>to watch offline.</h1>
        <p>Save your favourites easily and always have<span></span> something to watch.</p>
        </div>
    </div>
  )
}

export default Component3
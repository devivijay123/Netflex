import React from 'react'
import './Component5.css';
import children from '../assets/children.png';
const Component5 = () => {
  return (
        <div className='section5'>
            <div className='children'><img src={children} alt=''/></div>
            <div className='children_right'>
                <h1>Create profiles for <span></span>children.</h1>
                <p>Send children on adventures with their<span></span> favourite characters in a space made just for<span></span> them—free with your membership.</p>
            </div>

        </div>
    )
}

export default Component5
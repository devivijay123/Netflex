import React from 'react'
import img from '../assets/netflix.jpg'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
    <div className='himg'>
        <img src={img}/>
        <div className='gradient'></div>
    </div>
        
        <div className='content'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
        <div className='form'>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='content3'>
            <input type="email" placeholder='Email address'/>
            <div className='hp'><p>Get started</p> <span>&gt;</span></div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero
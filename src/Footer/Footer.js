import React from 'react'
import "./Footer.css"
// import globe from '../assets/globe.png'
const Footer = () => {
  return (
<div className='footer'>
    <div className='text'>Questions? Call 000-800-040-1843</div>
    <div className='footer_value'>
        <div className='values'>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
        </div>
        <div className='values'>
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
        </div>
        <div className='values'>
            <p>Account</p>
            <p>Ways to watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
        </div>
        <div className='values'>
            <p>Media Centre</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
            
        </div>
        
    </div>
    {/* <div className='globe-language'>
            <div className='globe'><img src={globe} alt=""></img></div>
    
           
                <div id="google_translate_element"></div>
               
                 </div> */}
    
                <p>Netflix India</p>
</div>
  )
}

export default Footer
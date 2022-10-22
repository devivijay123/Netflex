import React from 'react';
import './App.css';
import Component1 from './Component1/Component1';
import Component2 from './Component2/Component2';
import Component3 from './Component3/Component3';
import Component4 from './Component4/Component4';
import Component5 from './Component5/Component5';
import Component6 from './Component6/Component6';
import Hero from './Hero/Hero'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div>
 
      <Navbar/>
      <Hero/>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      <Component6/>
      <Footer/>
    </div>
  );
}

export default App;

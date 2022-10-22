import React from 'react'
import "./Component2.css"
import avengers from "../assets/avengers.jpg";
import baaghi3 from '../assets/baaghi3.jpg';
import bahubali from '../assets/bahubali.jpg';
import got from '../assets/got.jpg';
import kgf2 from '../assets/kgf2.jpg';
import liger from '../assets/liger.jpg';
import lionking from '../assets/lionking.jpg';
import rrr from '../assets/rrr.jpeg';
import shamshera from '../assets/shamshera.jpg';
import super30 from '../assets/super30.jpg';
import vikram from  '../assets/vikram.jpg';
import sacredgames from '../assets/sacredgames.jpg';

import avengersvideo from "../assets/avengers.mp4";
import baaghi3video from '../assets/baaghi.mp4';
import bahubalivideo from '../assets/bahubali.mp4';
import gotvideo from '../assets/got.mp4';
import kgf2video from '../assets/kgf2.mp4';
import ligervideo from '../assets/liger.mp4';
import lionkingvideo from '../assets/lionking.mp4';
import rrrvideo from '../assets/rrr.mp4';
import shamsheravideo from '../assets/shamshera.mp4';
import super30video from '../assets/super 30.mp4';
import vikramvideo from  '../assets/vikram.mp4';
import sacredgamesvideo from '../assets/sacredgames.mp4';
import { useState } from 'react';



const Component2 = () => {

  const card=[
    {
      image: avengers,
      video: avengersvideo
    },
    {image: baaghi3,
     video: baaghi3video},
    {image: bahubali,
     video: bahubalivideo},
    {image: got,
     video: gotvideo},
    {image: kgf2,
     video: kgf2video},
    {image: liger,
     video: ligervideo},
    {image: lionking,
     video: lionkingvideo},
    {image: rrr,
     video: rrrvideo},
    {image: shamshera,
     video: shamsheravideo},
    {image: super30,
     video: super30video},
    {image: vikram,
     video: vikramvideo},
    {image: sacredgames,
     video: sacredgamesvideo}
  ];
  const [select, setSelect] = useState(null);
  const handleSelect=(i)=>{
    if(select===i){
      return setSelect(null)
     }
     setSelect(i);
  }
  return (
    <div className='section2'>
      <div className="left">
      <div className='grid'>
        {card.map((item,i)=>{
          return(
            <div className="gimg" key={i}>
              <img src={item.image} alt="" onClick={()=>handleSelect(i)}/>             
            </div>
          )
        })}
      </div>
      </div>
      <div className='right'>
        

          {card.map((items,i)=>{
            return(
              <div key={i} className={select===i ? "display show": "display"}>
              <video src={items.video} controls autoPlay loop muted></video>
              </div>
            )
          })}
         
        </div>

      

    </div>
  )
}

export default Component2
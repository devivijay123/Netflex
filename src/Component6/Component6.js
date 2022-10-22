import React, { useState } from 'react'
import "./Component6.css"
import plus from '../assets/plus1.png'

const Component6 = () => {


    const data=[
        {
            question:"What is Netflix?",
            answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        },
        {
        question:"How much does Netflix cost?",
        answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹&nbsp;149 to ₹&nbsp;649 a month. No extra costs, no contracts.",
        },
        {
            question:"Where can I watch?",
            answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        },
        {
            
            question:"How do I cancel?",
            answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            question:"What can I watch on Netflix?",
            answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
        {
            question:"Is Netflix good for kids?",
            answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        },
    ];
    const [selected, setSelected] = useState(null);
    

    const handleSelect = (i) =>{
       if(selected===i){
        return setSelected(null)
       }
       setSelected(i);
    }
  return (
   <div className='section6'>
   <h1 className='faq_heading'>Frequently Asked Questions</h1>
    <div className="faq">
        <div className="item">
    
        {data.map((item,i)=>{
                return(
                    <div className="wrapper" key={i} >
                        <div className="question" onClick={() =>handleSelect(i)}>
                    <p>{item.question}</p>
                    <img src={plus} alt="" className='plus'/>
                </div>
                <div className={selected===i ? "answer show" : "answer"}>
                    <p>{item.answer} </p>
                    </div>
                
                    </div>
                );
            })
        }
        </div>
    </div>
    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

    <div className='form1'> 
            <form>
                <input name='' id='' placeholder='Email address'></input>
            </form>
            <button>Get Started &gt;</button>
            
        </div>

</div>
   
  )
}

export default Component6

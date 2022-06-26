import React from 'react'
import './Home.css';
import {motion} from 'framer-motion';
export default function Home() {
  return (
    <motion.div className="body"
    initial={{ width: 0 }}
      animate={{ width: "100%"}}
      exit={{ x:window.innerWidth, transition: { duration:0.1}}}
    >
      <div className="total">
      <div className="img">
        <img src={"/image/p1.jpg"}/>
      </div>
        {/* <div className="wrapper">
        <div className="static-text">I am a </div>
        <ul className='dynamic-text'>s
            <li><span>Front End Developmet</span></li>
            <li><span>Software Development</span></li>
            <li><span>ML Enthusiast</span></li>
        </ul>
        
    </div> */}
    <div className="name">
     
      <h2 data-text="Astik Gorai">Astik Gorai</h2>
    </div>
    </div>
    </motion.div>
  )
}

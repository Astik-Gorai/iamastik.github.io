import React from 'react'
import img2 from '../img/profile.jpg';
import {motion} from 'framer-motion';
import EducationPart from './EducationPart';
import './Education.css'
export default function Education() {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%"}}
    exit={{ x:window.innerWidth, transition: { duration:0.1} }}
    >
      <h1>Education Details</h1>
      <EducationPart clg="Indian Institute Of Engineering Science And Technology, Shibpur" start="2020" end="2024" grade="8.51" stream="CST"/>
      <EducationPart clg="Bankura High School" start="2017" end="2019" grade="92.60%" stream="Science"/>
      <EducationPart clg="FIITJEE -KOLKATA NORTH" start="2019" end="2020" grade="Selected" stream="JEE"/>
      <EducationPart clg="Chuamosina High School" start="2011" end="2017" grade="86.42%" stream="General"/>

    </motion.div>
  )
}

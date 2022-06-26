import React from 'react'
import { motion } from 'framer-motion';
import ItemSkill from './ItemSkill';
import './Skills.css';

export default function Skill() {
  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%"}}
    exit={{ x:window.innerWidth , transition: { duration:0.1}}}>
      My Skill
      <hr />
      <h3 align="center">Programming Languages:</h3>
      <div className="one">
      <ItemSkill name="C"/>
        <ItemSkill name="C++" />
        <ItemSkill name="Python" />
        <ItemSkill name="JavaScript" />
        <ItemSkill name="React JS" />
      </div>
      <h3 align="center">Other Skills:</h3>
      <div className="two">
      <ItemSkill name="Machine Learning" />
      <ItemSkill name="Data Structure"/>
      <ItemSkill name="Algorithm"/>
      <ItemSkill name="CSS"/>
     < ItemSkill name="HTML" />
      </div>

    </motion.div>
  )
}

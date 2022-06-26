import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom';


import Home from './Home';
import Education from './Education';
import Project from './Project';
import Skill from './Skill';
import Footer from './Footer';
// import Project_item from '.Project_item';
import {AnimatePresence} from 'framer-motion'

function AnimatedPage() {
    const location =useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home/>}/>
    <Route path="/my_projects" element={<Project/>}/>
    <Route path="/my_skills" element={<Skill/>}/>
    <Route path="/my_education" element={<Education/>}/>

</Routes>
</AnimatePresence>
  )
}

export default AnimatedPage

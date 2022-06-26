import React from 'react'
import ProjectItem from './Project_item';
import {motion} from'framer-motion';
export default function Project() {
  return (
    <motion.div
    initial={{ width:"-20vw"}}
    animate={{ width: "100%"}}
    exit={{ x:window.innerWidth , transition: { duration:0.1}}}>
      <h1>Project</h1>
      <ProjectItem name="PortFolio WebSite" link="https://github.com/iamastik/Portfolio" img="/image/project4.jpg" />
    <ProjectItem name="Coaching Management System" link="https://github.com/iamastik/Coaching-Management-System" target="_blank" img="/image/project1.jpg" />
    <ProjectItem name="News Hunter" link="https://github.com/iamastik/News-Hunter" img="/image/project2.jpg" />
    <ProjectItem name="Space Invedors" link="https://github.com/iamastik/SpaceInvedors" img="/image/project3.jpg" />
    </motion.div>
  )
}

import React from 'react'
import './Project_item.css';
export default function project_item(props) {
  let path =props.img;
  return (
    <div className="projectItem">
        {/* <h1>Hi I am in Project</h1> */}
      <img src={path} alt="Project Image" />
      <div className="projectTitle">Project Name :{props.name}
      <h3>Project Link: <a href={props.link}>Click Here</a></h3></div>
    </div>
  )
}

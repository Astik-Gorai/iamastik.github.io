import React from 'react'
import './EducationPart.css'
export default function EducationPart(props) {
  return (
    <div>
      <div className="whole">
        <h2>{props.clg}</h2>
        <h3>{props.start} - {props.end}</h3>
        <h3>Grade: {props.grade}</h3>
        <h4>Stream: {props.stream}</h4>
      </div>
    </div>
  )
}

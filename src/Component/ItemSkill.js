import React from 'react'
import './ItemSkill.css'; 
export default function ItemSkill(props) {
  return (
    <div>
      <div className="item">
        <h4>{props.name}</h4>
      </div>
    </div>
  )
}

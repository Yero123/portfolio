import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BoxArea = (props) => {
  const { title, icon } = props
  return (
    <div>
      <FontAwesomeIcon icon={icon} className="area-icon"/>
      <h3>{title}</h3>
    </div>
  )
}

export default BoxArea
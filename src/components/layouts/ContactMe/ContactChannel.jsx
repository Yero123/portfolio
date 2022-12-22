import React from 'react'

const ContactChannel = ({icon,title,info}) => {
  return (
    <div className='contactChannel'>
        <div className='contactChannel__icon'>{icon}</div>
        <div className='contactChannel__body'>
          <p className='contactChannel__body_title'>{title}</p>
          <p>{info}</p>
        </div>
      </div>
  )
}

export default ContactChannel
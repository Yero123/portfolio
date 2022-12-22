import React from 'react'

const Subtitle = (props) => {
  const { text } = props
  return (
    <div className='subtitle'>
      <p>{text}</p>
      <h2>{text}</h2>
    </div>
  )
}

export default Subtitle
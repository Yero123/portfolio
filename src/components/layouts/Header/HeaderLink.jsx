import React from 'react'

const HeaderLink = (props) => {
  const { text, selected = false, url } = props
  return (
    <li>
      <div />
      <a href={url}>{text} </a>
    </li>
  )
}

export default HeaderLink
import React from 'react'
import HeaderLink from './HeaderLink'
import { motion } from 'framer-motion'
const Header = () => {
  const initial = { opacity: 0, y: -50 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <header>
      <motion.div 
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <ul>
          <HeaderLink text="Home" url="#heroSection" selected />
          <HeaderLink text="About me " url="#aboutMe" selected />
          <HeaderLink text="Proyects" url="#recentWork" selected />
          <HeaderLink text="Contact" url="#contactMe" selected />
        </ul>
      </motion.div>
    </header>
  )
}

export default Header
import React from 'react'
import { motion } from 'framer-motion'
const HeroDescription = () => {
  const initial = { opacity: 0, x: -100 };
  const animate = { opacity: 1, x: 0 };
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <motion.div className='hero-info__text'
      initial={initial}
      animate={animate}
      transition={transition}
      >
      <h1>Soy<br /> Yerodin <div>Cuellar</div></h1>
      <div className='divider' />
      <p>Desarrollador Full stack</p>
      <p>Javascript: Next and Nest</p>
    </motion.div>
  )
}

export default HeroDescription
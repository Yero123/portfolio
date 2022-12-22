import React from 'react'
import { motion } from 'framer-motion'
const NickName = () => {
  const initial = { opacity: 0, x: -100 };
  const animate = { opacity: 1, x: 0 };
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <motion.div className='hero-nickName'
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <p>Yero</p>
    </motion.div>
  )
}

export default NickName
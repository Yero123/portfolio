import React from 'react'
import photo from '../../../../public/images/photo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const HeroImage = () => {
  const initial = { opacity: 0, x: 100 };
  const animate = { opacity: 1, x: 0 };
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <motion.div className='hero-photo'
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <Image  src={photo} alt="Yerodin Cuellar"/>
    </motion.div>
  )
}

export default HeroImage
import React from 'react'
import BoxArea from './BoxArea'
import { faMobileScreenButton, faPenNib, faDesktop, faUser } from '@fortawesome/free-solid-svg-icons'
import Subtitle from '../../common/Subtitle.jsx'
import { motion } from 'framer-motion'
const AboutMe = () => {
  const variants = {
    hidden: { opacity: 1, scale: 0 }, visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      }
    }
  }
  return (
    <div className='aboutMe'>
      <Subtitle text="What I do" />
      <motion.div className="areasGrid"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <BoxArea title="Product Design" icon={faPenNib} />
        <BoxArea title="Mobile developer" icon={faMobileScreenButton} />
        <BoxArea title="UX/UI Design" icon={faUser} />
        <BoxArea title="Web developer" icon={faDesktop} />
      </motion.div>
    </div >
  )
}

export default AboutMe
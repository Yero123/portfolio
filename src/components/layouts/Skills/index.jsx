import React from 'react'
import Subtitle from 'components/common/Subtitle'
import Image from 'next/image'
import { skillsImages } from '../../../utils/constans'
import { motion } from 'framer-motion'
const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return <div className='skills'>
    <Subtitle text="Habilidades" />
    <motion.ul className="skillsGroup"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skillsImages.map((skill, index) =>
        <motion.li key={index} className="skills__item" variants={item}>
          <Image src={skill.src} alt="skill" className='skill' />
        </motion.li>
      )}
    </motion.ul>
  </div>

}

export default Skills
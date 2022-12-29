import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from 'components/common/Button'
import { motion } from 'framer-motion'
const Project = ({ title, goal, description, logo, mockUp, link }) => {
  const initial = { opacity: 0, x: -100 };
  const animate = { opacity: 1, x: 0 };
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  const initialLeft = { opacity: 0, x: +100 };
  return (
    <div className='project'>
      <motion.div
        // initial={initialLeft}
        // whileInView={animate}
        // transition={transition}
        >
        <h2>{title}</h2>
        <div>
          <div>
            <p className='project__goal'>{goal}</p>
            <p className='project__description'>{description}</p>
            <Link
              href={link}
              target="_blank"
              className='project__link_responsive'
            >
              <Button>Descargar</Button>
            </Link>
          </div>
          <Image className='project__logo' src={logo.src} alt={logo.alt} width={200} height={200} />
        </div>
      </motion.div>
      <motion.div className='project__mockUp'
        // initial={initial}
        // whileInView={animate}
        // transition={transition}
      >
        <Image src={mockUp.src} alt={mockUp.alt} className="project__mockUp_image" />
      </motion.div>

      <Link
        href={link}
        target="_blank"
        className='project__link'
      >
        <Button>Descargar</Button>
      </Link>
    </div>
  )
}

export default Project
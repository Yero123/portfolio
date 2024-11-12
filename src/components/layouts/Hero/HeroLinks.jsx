import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'
const HeroLinks = () => {
  const initial = { opacity: 0, y: -50 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <motion.div className='hero-links'
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className='hero-links__decoration'>
        <p>Follow me </p>
        <div></div>
      </div>
      <ul>
        <li>
          <Link
            href="www.linkedin.com/in/naveed-cuellar-66b4b4218"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="links-icon" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/yero_cs/?hl=es-la"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="links-icon" />
          </Link></li>
        <li>
          <Link
            href="https://www.facebook.com/yerodincs/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="links-icon" />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Yero123"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="links-icon" />
          </Link>
        </li>
      </ul >
    </motion.div >
  )
}

export default HeroLinks
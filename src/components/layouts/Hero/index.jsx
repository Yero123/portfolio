import React from 'react'
import NickName from './NickName'
import HeroImage from './HeroImage'
import HeroLinks from './HeroLinks'
import Image from 'next/image'
import Line from '@/../public/images/line.png'
import HeroDescription from './HeroDescription'
const Hero = () => {

  return (
    <div className='hero'>
      <NickName />
      <div className="hero-info">
        <HeroImage />
        <HeroDescription/>
      </div>
      <HeroLinks />
      <Image className="hero__line" src={Line} />
    </div>
  )
}

export default Hero
import React from 'react'
import ContactChannel from './ContactChannel'
import Image from 'next/image'
import Decoration from '@/../public/images/decoration2.png'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactMe = () => {
  return <div className='contactMe'>
    <div className='contacMe__body'>
      <h2>Contactame</h2>
      <div className='contactChannel__container'>
        <ContactChannel icon={<FontAwesomeIcon icon={faPhoneAlt} />} title="Número" info="+51 970 969 007" />
        <ContactChannel icon={<FontAwesomeIcon icon={faEnvelope} />} title="Email" info="yerodince@gmail.com" />
      </div>
    </div>
    <div className='contactMe__decoration'>
      <Image src={Decoration} alt="decoration" className='contactMe__decoration_image' />
    </div>
  </div>
}

export default ContactMe
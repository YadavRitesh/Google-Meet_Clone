import {faClosedCaptioning, faDesktop, faEllipsisVertical, faInfoCircle, faMessage, faMicrophone, faPeopleGroup, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-outer'>
        <div className='box-1'>
            <div className='meet-icons-1'>
                <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <div className='meet-icons-1'>
                <FontAwesomeIcon icon={faVideo} />
            </div>
            <div className='meet-icons-1'>
                <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div className='meet-icons-1'>
                <FontAwesomeIcon icon={faClosedCaptioning} />
            </div>
            <div className='meet-icons-1'>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className='meet-icons-1 phone'>
                <FontAwesomeIcon icon={faPhone} />
            </div>
            
        </div>
        <div className='box-2'>
            <div className='meet-icons-2' >
                <FontAwesomeIcon icon={faInfoCircle}/>
            </div>
            <div className='meet-icons-2' >
                <FontAwesomeIcon icon={faPeopleGroup}/>
            </div>
            <div className='meet-icons-2' >
                <FontAwesomeIcon icon={faMessage}/>
            </div>
            <div className='meet-icons-2' >
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
    </div>
  )
}

export default Footer
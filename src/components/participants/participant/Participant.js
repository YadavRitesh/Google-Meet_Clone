import React from 'react'
import { Card } from '../../Shared/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'
import'./Participant.css'

const Participant = () => {
  return (
    <div className='participant'>
        <Card>
            <video className='video'></video>
            <FontAwesomeIcon className='muted' icon={faMicrophoneSlash}/>
            <div className='avatar'>A</div>
            <div className='name'>username</div>
        </Card>
    </div>
  )
}

export default Participant
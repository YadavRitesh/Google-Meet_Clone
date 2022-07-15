import React from 'react'
import Footer from '../footer/Footer'
import Participants from '../participants/Participants'
import './MainScreen.css'

const MainScreen = () => {
  return (
    <div className='wrapper'>
        <div className='main-screen'>
            <Participants/>
        </div>
        <div className='main-footer'><Footer/></div>
    </div>
  )
}

export default MainScreen
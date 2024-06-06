import React from 'react'
import { Clock, News, Notes, UserInfo, Weather } from '../components'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Dashboard = () => {
  const navigate = useNavigate()

  const browseHandle = () => {
    
    navigate("/browse")
  }
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      padding: '0.6rem 6rem',
      backgroundColor: 'black',
      position : 'relative'
    }}>
        <UserInfo />
        <Notes />
        <News />
        <Clock/>
        <Weather/>
        <button className='dashboardBrowseButton' onClick={browseHandle}>Browse</button>
    </div>
  )
}

export default Dashboard

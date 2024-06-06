import React, { useEffect, useState } from 'react'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import downArrow from '../../../public/assets/downArrow.png'
import upArrow from '../../../public/assets/upArrow.png'



const Clock = () => {

  const [duration, setDuration] = useState(5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [key, setKey] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null)

  const timerProps = {
    strokeWidth: 6,
    colors: '#FF6A6A',
    size: '200'
  };

  useEffect(() => {
    setRemainingTime(duration);
  }, [duration]);


  const increaseSeconds = () => {
    setDuration(prevDuration => prevDuration + 1)

  }

  const decreaseSeconds = () => {
    if (remainingTime > 1)
      setDuration(prevDuration => prevDuration - 1)
  }

  const increaseMinutes = () => {
    setDuration(prevDuration => prevDuration + 60)
  }

  const decreaseMinutes = () => {
    if (remainingTime > 60)
      setDuration(prevDuration => prevDuration - 60)
  }

  const increaseHours = () => {
    setDuration(prevDuration => prevDuration + 3600)
  }
  const decreaseHours = () => {
    if (remainingTime > 3600)
      setDuration(prevDuration => prevDuration - 3600)
  }


  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white'
    }}>
      <div style={{ fontSize: '18px', fontFamily: 'Roboto' }}>Remaining</div>
      <div style={{ fontSize: '32px', fontFamily: 'Roboto', margin: '0.8em' }}>{hours}:{minutes}:{seconds}</div>
      <div style={{ fontSize: '18px', fontFamily: 'Roboto' }}>Time</div>

    </div>
  }



  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      position: 'absolute',
      top: '29rem',
      backgroundColor: '#1E2343',
      borderRadius: '25px',
      width: '900px',
      height: '230px'
      // color : 'white'
    }}>
      <div>
        <CountdownCircleTimer
          {...timerProps}
          key={key}
          isPlaying={isPlaying}
          duration={duration}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}   // repeat animation in 1.5 seconds
        >
          {remainingTime && children}
        </CountdownCircleTimer>
      </div>
      <div style={{
        backgroundColor: '#1E2343',
        height: '220px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>


        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '2em',
          width: '100%',
          color: '#949494',
          fontSize: '24px'
        }}>
          <p style={{marginLeft: '0.5em'}}>Hours</p>
          <p style={{ marginLeft: '0.7em' }}>Minutes</p>
          <p style={{ marginLeft: '0.5em' }}>Seconds</p>
        </div>


        <div style={{
          height: '7em',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
          <div style={{
            height: '7em',
            width: '15%',
            backgroundColor: '#1E2343',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }} >
            <button
              style={{
                display: 'block',
                backgroundColor: '#1E2343',
                border: '1px solid #1E2343',
                cursor: 'pointer'
              }}
              onClick={increaseHours}
            >
              <img
                width="16"
                height="16"
                src={upArrow}
                alt="upArrow"
                style={{ backgroundColor: '#1E2343' }}
              />
            </button>
            <span style={{ display: 'block', color: 'white', fontSize: '24px' }}>
              {Math.floor(duration / 3600)}
            </span>
            <button
              style={{
                display: 'block',
                backgroundColor: '#1E2343',
                border: '1px solid #1E2343',
                cursor: 'pointer'
              }}
              onClick={decreaseHours}
            >
              <img
                width="16"
                height="16"
                src={downArrow}
                alt="downArrow"
                style={{ backgroundColor: '#1E2343' }}
              />
            </button>
          </div>
          <span style={{ display: 'block', margin: '1.4em 0em', color: 'white', fontSize: '28px' }}>:</span>
          <div
            style={{
              height: '7em',
              width: '15%',
              backgroundColor: '#1E2343',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}>

            <button
              style={{
                display: 'block',
                backgroundColor: '#1E2343',
                border: '1px solid #1E2343',
                cursor: 'pointer'
              }}
              onClick={increaseMinutes}
            >
              <img
                width="16"
                height="16"
                src={upArrow}
                alt="upArrow"
                style={{ backgroundColor: '#1E2343' }}
              />
            </button>
            <span style={{ display: 'block', color: 'white', fontSize: '24px' }}>
              {duration > 3600 ? Math.floor((duration % 3600) / 60) : Math.floor(duration / 60)}
            </span>
            <button
              style={{
                display: 'block',
                backgroundColor: '#1E2343',
                border: '1px solid #1E2343',
                cursor: 'pointer'
              }}
              onClick={decreaseMinutes}
            >
              <img
                width="16"
                height="16"
                src={downArrow}
                alt="downArrow"
              />
            </button>
          </div>
          <span style={{ display: 'block', margin: '1.4em 0em', color: 'white', fontSize: '28px' }}>:</span>
          <div
            style={{
              height: '7em',
              width: '15%',
              backgroundColor: '#1E2343',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}>
            <button
              style={{
                display: 'block',
                backgroundColor: '#1E2343',
                border: '1px solid #1E2343',
                cursor: 'pointer'
              }}
              onClick={increaseSeconds}
            >
              <img
                width="16"
                height="16"
                src={upArrow}
                alt="upArrow"
              />
            </button>
            <span style={{ display: 'block', color: 'white', fontSize: '24px' }}>
              {duration > 60 ? duration % 60 : duration}
            </span>
            <button
              style={{
                display: 'block',
                backgroundColor: '#1E2343',
                border: '1px solid #1E2343',
                cursor: 'pointer'
              }}
              onClick={decreaseSeconds}
            >
              <img
                width="16"
                height="16"
                src={downArrow}
                alt="downArrow"
              />
            </button>
          </div>
        </div>



        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '4em',
          width: '100%',
        }}>
          {isPlaying ?
            <button
              style={{
                width: '10.5em',
                height: '2em',
                marginRight: '0.6em',
                backgroundColor: '#FF6A6A',
                borderRadius: '25px',
                border: '1px solid #FF6A6A',
                cursor: 'pointer'
              }}
              onClick={() => setIsPlaying(false)}
            >
              <p style={{ color: 'white' }}>Pause</p>
            </button>

            :
            <button
              style={{ width: '10.5em', height: '2em', marginRight: '0.6em', backgroundColor: '#FF6A6A', borderRadius: '25px', border: '1px solid #FF6A6A', cursor: 'pointer' }}
              onClick={() => setIsPlaying(true)}
            >
              <p style={{ color: 'white' }}>Start</p>
            </button>

          }

          <button
            style={{ width: '10.5em', height: '2em', margin: '0em 0.6em', backgroundColor: '#FF6A6A', borderRadius: '25px', border: '1px solid #FF6A6A', cursor: 'pointer' }}
            onClick={() => setKey(prevKey => prevKey + 1)}
          >
            <p style={{ color: 'white' }}>Restart</p>
          </button>

          <button
            style={{ width: '10.5em', height: '2em', marginLeft: '0.6em', backgroundColor: '#FF6A6A', borderRadius: '25px', border: '1px solid #FF6A6A', cursor: 'pointer' }}
            onClick={() => { setDuration(5), setRemainingTime(duration), setIsPlaying(false), setKey(0) }}>
            <p style={{ color: 'white' }}>Reset</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Clock




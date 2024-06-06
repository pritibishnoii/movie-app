import React, { useEffect, useState } from 'react'
import date from 'date-and-time';
import windSpeed from '../../../public/assets/windSpeed.png'
import pressureCheck from '../../../public/assets/pressureCheck.png'
import rainCheck from '../../../public/assets/rainCheck.png'
import humidityCheck from '../../../public/assets/humidityCheck.png'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Kanpur%20%2CIndia&contentType=json&unitGroup=metric&shortColumnNames=false';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8fd15fe359msheb77714e0a008a3p1bc307jsndcc1d55e706b',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then((response) => response.json())
                .then(res => res.locations["Kanpur ,India"].currentConditions)
                .then((data) => setWeatherData(data))
        } catch (error) {
            console.error(error);
        }
    }, [])

    const now = new Date();
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: '#101744',
            borderRadius: '25px',
            height: '140px',
            width: '500px',
            top: '19rem'
        }}>
            <div style={{
                height: '3.5em',
                width: '100%',
                backgroundColor: '#FF4ADE',
                borderTopLeftRadius: '25px',
                borderTopRightRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                color: 'white'
            }}>
                <span style={{ display: 'block', fontSize: '28px' }}>{date.format(now, 'YYYY/MM/DD')}</span>
                <span style={{ display: 'block', fontSize: '28px' }}>{date.format(now, 'HH:mm:ss')}</span>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '5.5em',
                width: '100%'
            }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img height='28px' width='28px' src={rainCheck} alt="rainIcon" />
                    {weatherData && weatherData.cloudcover === null ? <p style={{ color: 'white', fontSize: '18px', marginTop: '0.8em' }}>No Heavy Rain</p> : <p style={{ color: 'white', fontSize: '18px', marginTop: '0.8em' }}>Heavy Rain</p>}
                </div>

                <span style={{ display: 'block', color: 'white', fontSize: '36px' }}>|</span>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

                    <p style={{
                        fontSize: '24px',
                        color: 'white'
                    }}>{weatherData && weatherData.temp}<img width="16" height="16" src="https://img.icons8.com/metro/26/FFFFFF/temperature.png" alt="temperature" style={{ marginLeft: '0.5em' }} /></p>

                    <div style={{ display: 'flex', marginTop: '1em' }}>
                        <img height='16px' width='16px' src={pressureCheck} alt="pressureIcon" />
                        <p style={{ color: 'white', fontSize: '16px', marginLeft: '0.5em' }}>{weatherData && weatherData.sealevelpressure}</p>
                    </div>

                </div>

                <span style={{ display: 'block', color: 'white', fontSize: '36px' }}>|</span>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

                    <div style={{ display: 'flex', marginBottom: '1em' }}>
                        <img height='18px' width='18px' src={windSpeed} alt="windSpeedIcon" />
                        <p style={{
                            fontSize: '20px',
                            color: 'white',
                            marginLeft: '0.5em'
                        }}>{weatherData && weatherData.wspd}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img width="12px" height="16px" src={humidityCheck} alt='humidityIcon' />
                        <p style={{
                            fontSize: '20px',
                            color: 'white',
                            marginLeft: '0.5em'
                        }}>{weatherData && weatherData.humidity}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Weather


//<span>C</span>
// cloudcover
// :
// null
// datetime
// :
// "2024-05-01T21:00:00+05:30"
// dew
// :
// 6
// heatindex
// :
// 28.3
// humidity
// :
// 22
// icon
// :
// "clear-night"
// moonphase
// :
// 0.75
// precip
// :
// null
// sealevelpressure
// :
// 1002
// snowdepth
// :
// null
// stations
// :
// ""
// sunrise
// :
// "2024-05-01T05:30:56+05:30"
// sunset
// :
// "2024-05-01T18:41:02+05:30"
// temp
// :
// 30
// visibility
// :
// 5
// wdir
// :
// 320
// wgust
// :
// null
// windchill
// :
// null
// wspd
// :
// 14.8
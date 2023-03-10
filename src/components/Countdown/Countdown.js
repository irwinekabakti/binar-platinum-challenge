import { timers } from 'jquery';
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";




const Countdown = ({timer}) => {

    const [countDown, setCountdown] = useState(timer)
    // const timerId = useRef()
  
    useEffect(()=> {
        setTimeout(() => {
        setCountdown(countDown-1000)
        },1000)
    },[countDown])
    

    const getFormatTime = (miliseconds) => {
    let totalSeconds = Number (Math.floor(miliseconds / 1000))
    let totalMinutes = Number (Math.floor(totalSeconds / 60))
    let totalHours = Number (Math.floor(totalMinutes / 60))
    let second = Number (totalSeconds % 60)
    let minutes = Number (totalMinutes % 60)
    let hours = Number (totalHours % 24)
    return `${hours}: ${minutes}: ${second}`
       }

  return (

    <div>{getFormatTime(countDown)}</div>
  )
}

export default Countdown


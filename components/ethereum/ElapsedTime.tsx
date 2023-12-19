'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const Watch: React.FC = () => {
  const context = useContext(Context)
  const [time, setTime] = useState<string>('--')

  function formatTime(milliseconds) {
    const oneSecond = 1000
    const oneMinute = oneSecond * 60
    const oneHour = oneMinute * 60
    const oneDay = oneHour * 24

    const days = Math.floor(milliseconds / oneDay)
    milliseconds -= days * oneDay
    const hours = Math.floor(milliseconds / oneHour)
    milliseconds -= hours * oneHour
    const minutes = Math.floor(milliseconds / oneMinute)
    milliseconds -= minutes * oneMinute
    const seconds = Math.floor(milliseconds / oneSecond)
    milliseconds -= seconds * oneSecond

    return `${days > 0 ? days + 'd ' : ''}${hours > 0 ? hours + 'h ' : ''}${
      minutes > 0 ? minutes + 'm ' : ''
    }${seconds > 0 ? seconds + 's ' : ''}${milliseconds}ms`
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const updateDate = () => {
      const firstSeenTimeStamp = context.ethersProvider?.blockFirstSeen?.timestamp
      const currentTime = new Date().getTime()
      const elapsed = firstSeenTimeStamp ? currentTime - firstSeenTimeStamp * 1000 : -1
      setTime(elapsed >= 0 ? formatTime(elapsed) : '')
    }

    // Fetch the block number immediately on component mount
    updateDate()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(updateDate, 500)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [context?.ethersProvider?.web3Provider])

  return <span className={'font-mono'}>{time}</span>
}

export default Watch

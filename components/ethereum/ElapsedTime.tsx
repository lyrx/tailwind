'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const Watch: React.FC = () => {
  const context = useContext(Context)
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

  const updateDate = () => {
    const firstSeenTimeStamp = context.ethersProvider?.dateFirstSeen?.getTime()
    const currentTime = new Date().getTime()
    const elapsed = firstSeenTimeStamp ? currentTime - firstSeenTimeStamp : -1
    return elapsed >= 0 ? formatTime(elapsed) : ''
  }

  return <span className={'font-mono'}>{updateDate()}</span>
}

export default Watch

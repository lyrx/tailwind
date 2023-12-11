'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const Watch: React.FC = () => {
  const context = useContext(Context)
  const [time, setTime] = useState<string>('--')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    // Define a function to fetch the block number
    const updateDate = () => setTime(new Date().toLocaleTimeString())

    // Fetch the block number immediately on component mount
    updateDate()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(updateDate, 500)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [context?.ethersProvider?.web3Provider])

  return <span>{time}</span>
}

export default Watch

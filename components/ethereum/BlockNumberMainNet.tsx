'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BlockNumberMainNet: React.FC = () => {
  const context = useContext(Context)
  const [blockNumber, setBlockNumber] = useState<number>(0)

  useEffect(() => {
    // Define a function to fetch the block number
    const fetchBlockNumber = () => {
      context?.ethersProvider?.defaultMainNetProvider
        ?.getBlockNumber()
        .then((n) => setBlockNumber(n))
    }

    // Fetch the block number immediately on component mount
    fetchBlockNumber()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(fetchBlockNumber, 12000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [context?.ethersProvider?.defaultMainNetProvider])

  return blockNumber
}

export default BlockNumberMainNet

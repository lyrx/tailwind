'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BalanceMainNet: React.FC = (address: string) => {
  const context = useContext(Context)
  const [balance, setBalance] = useState<BigNumberish>(0)

  useEffect(() => {
    // Define a function to fetch the block number
    const fetchBalance = () => {
      context?.ethersProvider?.defaultMainNetProvider
        ?.getBalance(address)
        .then((n) => setBalance(n))
    }

    // Fetch the block number immediately on component mount
    fetchBalance()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(fetchBalance, 12000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [context?.ethersProvider?.defaultMainNetProvider])

  return ethers.formatEther(balance)
}

export default BalanceMainNet

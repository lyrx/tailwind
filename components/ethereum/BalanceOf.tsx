'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BalanceOf: React.FC<{ address: string }> = ({ address }) => {
  const context = useContext(Context)
  const [balance, setBalance] = useState<BigNumberish>(0)

  useEffect(() => {
    // Define a function to fetch the block number
    const fetchBalance = () => {
      context?.ethersProvider?.web3Provider?.getBalance(address).then((n) => setBalance(n))
    }

    // Fetch the block number immediately on component mount
    fetchBalance()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(fetchBalance, 12000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [context?.ethersProvider?.web3Provider])

  return <span>{ethers.formatEther(balance)}</span>
}

export default BalanceOf

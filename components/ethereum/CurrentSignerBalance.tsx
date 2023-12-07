'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'
import BalanceMainNet from '@/components/ethereum/BalanceMainNet'

const CurrentSignerAddress: React.FC = () => {
  const context = useContext(Context)
  const [balance, setBalance] = useState<string>('--')
  useEffect(() => {
    context.ethersProvider?.web3Provider?.getSigner().then((s) => {
      return s.getAddress().then((a) => {
        const address = a
        const fetchBalance = () => {
          context.ethersProvider?.web3Provider
            ?.getBalance(address)
            .then((n) => setBalance(ethers.formatEther(n)))
        }
        fetchBalance()
        const interval = setInterval(fetchBalance, 12000)
        return () => clearInterval(interval)
      })
    })
    // Clean up the interval when the component unmounts
  }, [context.ethersProvider?.web3Provider])
  return balance
}

export default CurrentSignerAddress

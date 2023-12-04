'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const CurrentSignerAddress: React.FC = () => {
  const context = useContext(Context)
  const [balance, setBalance] = useState<BigNumberish>(0)
  useEffect(() => {
    context?.ethersProvider?.web3Provider?.getSigner().then((s) => {
      return s.getAddress().then((a) => {
        context.ethersProvider?.web3Provider?.getBalance(a).then((b) => setBalance(b))
      })
    })
  }, [context?.ethersProvider?.web3Provider])
  return ethers.formatEther(balance)
}

export default CurrentSignerAddress

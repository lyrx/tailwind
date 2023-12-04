'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const CurrentAddress: React.FC = () => {
  const context = useContext(Context)
  const [network, setNetwork] = useState<ethers.Network | null | undefined>(null)
  useEffect(() => {
    const aprovider = context?.ethersProvider?.web3Provider
    aprovider?.getNetwork().then((n) => setNetwork(n))
  }, [context?.ethersProvider?.web3Provider])
  return network ? network?.name : `No network`
}

export default CurrentAddress

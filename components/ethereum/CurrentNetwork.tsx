'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { ethers } from 'ethers'

const CurrentNetwork: React.FC = () => {
  const context = useContext(Context)
  const [network, setNetwork] = useState<ethers.Network | null | undefined>(null)
  useEffect(() => {
    context?.ethersProvider?.web3Provider?.getNetwork().then((n) => setNetwork(n))
  }, [context?.ethersProvider?.web3Provider])
  return network ? <span>{network?.name}</span> : <span>`--`</span>
}

export default CurrentNetwork

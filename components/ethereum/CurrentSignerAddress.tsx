'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const CurrentSignerAddress: React.FC = () => {
  const context = useContext(Context)
  const [address, setAddress] = useState<string>(``)
  useEffect(() => {
    context?.ethersProvider?.web3Provider
      ?.getSigner()
      .then((s) => s.getAddress().then((a) => setAddress(a)))
  }, [context?.ethersProvider?.web3Provider])
  return <span>{address}</span>
}

export default CurrentSignerAddress

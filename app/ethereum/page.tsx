'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../context/Context'
import { ethers } from 'ethers'

const EthComponent: React.FC = () => {
  const [web3Provider, setWeb3Provider] = useState<ethers.Provider | null | undefined>(null)
  const [signer, setSigner] = useState<ethers.Signer | null | undefined>(null)
  const [address, setAddress] = useState<string | null | undefined>(null)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const context = useContext(Context)
  useEffect(() => {
    const aprovider = context?.ethersProvider?.web3Provider
    setWeb3Provider(aprovider)
    // @ts-ignore
    aprovider?.getSigner().then((s) => {
      setSigner(s)
      s.getAddress().then((a) => {
        setAddress(a)
        setIsInitialized(true)
      })
    })
  }, [context?.ethersProvider?.web3Provider])

  const whenInitialized = () => (
    <div>
      {' '}
      <p>`address: {JSON.stringify(address)}`</p>
    </div>
  )
  const whenNotInitialized = () => (
    <div>
      <p>'Initializing'</p>
    </div>
  )
  return isInitialized ? whenInitialized() : whenNotInitialized()
}

export default EthComponent

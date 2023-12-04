'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../context/Context'
import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import { BigNumberish, ethers } from 'ethers'

const EthComponent: React.FC = () => {
  const [web3Provider, setWeb3Provider] = useState<ethers.Provider | null | undefined>(null)
  const [signer, setSigner] = useState<ethers.Signer | null | undefined>(null)
  const [address, setAddress] = useState<string | null | undefined>(null)
  const [balance, setBalance] = useState<BigNumberish>(0)
  const [network, setNetwork] = useState<ethers.Network | null>(null)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const context = useContext(Context)
  useEffect(() => {
    const aprovider = context?.ethersProvider?.web3Provider
    setWeb3Provider(aprovider)
    aprovider?.getSigner().then((s) => {
      setSigner(s)
      s.getAddress().then((a) => {
        setAddress(a)
        aprovider?.getBalance(a).then((b) => {
          setBalance(b)
          aprovider?.getNetwork().then((n) => {
            setNetwork(n)
            setIsInitialized(true)
          })
        })
      })
    })
  }, [context?.ethersProvider?.web3Provider])

  const whenInitialized = () => (
    <div>
      {' '}
      <p>
        Address: <CurrentSignerAddress />: {ethers.formatEther(balance)} (<CurrentNetwork />)
      </p>
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

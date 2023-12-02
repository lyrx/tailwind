'use client'

import React, { useEffect, useState, useContext } from 'react'
import EthereumContext from './EthereumContext'
import { ethers } from 'ethers'
const EthComponent: React.FC = () => {
  const [ethereum, setEthereum] = useState(null)
  const ethereumContext = useContext(EthereumContext)
  useEffect(() => {
    // Ensure ethereum is available
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      ethereumContext.ethersProvider = {
        // @ts-ignore
        web3Provider: new ethers.BrowserProvider(window.ethereum),
      }
      // Set ethereum
      // @ts-ignore
      setEthereum(window.ethereum)
    }
  }, []) // Empty array ensures that effect runs only on mount
  // @ts-ignore
  return (
    <div>
      <p>Window ethereum: {ethereum ? 'Ethereum found' : 'Ethereum not found'}</p>
      <p>Provider: {JSON.stringify(ethereumContext.ethersProvider?.web3Provider?.provider)}</p>
    </div>
  )
}

export default EthComponent

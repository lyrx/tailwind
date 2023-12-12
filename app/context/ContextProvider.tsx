'use client'
import React, { useState, ReactNode, useEffect } from 'react'
import Context, { createEmptyState } from './Context'
import {
  BlockOrNull,
  BlockSetterOrNull,
  BrowserProviderOrNull,
  ProviderOrNull,
} from '@/components/ethereum/EthersDerivedTypes'
import { ethers } from 'ethers'

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [lastBlock, setLastBlock]: [BlockOrNull, BlockSetterOrNull] = useState<BlockOrNull>(null)

  const [web3Provider, setWeb3Provider] = useState<BrowserProviderOrNull>(
    // @ts-ignore
    typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
      ? // @ts-ignore
        new ethers.BrowserProvider(window.ethereum)
      : null
  )

  useEffect(() => {
    // Define a function to fetch the block number
    const fetchLastBlock = () => web3Provider?.getBlock('latest').then((b) => setLastBlock(b))

    // Fetch the block number immediately on component mount
    fetchLastBlock()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(fetchLastBlock, 12000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [])

  return (
    <Context.Provider
      value={createEmptyState(
        lastBlock,
        setLastBlock,
        ethers.getDefaultProvider('mainnet'),
        web3Provider,
        setWeb3Provider
      )}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

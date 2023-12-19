'use client'
import React, { useState, ReactNode, useEffect } from 'react'

import {
  BlockOrNull,
  BlockSetterOrNull,
  BrowserProviderOrNull,
  NetworkOrNull,
  NetworkSetterOrNull,
} from '@/components/ethereum/EthersDerivedTypes'
import { ethers } from 'ethers'
import Context from './Context'

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  function maybeAddWalletListener() {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      // @ts-ignore
      if (!window.ethereum._listenerAdded) {
        const onbrowserPlugin = () => {
          //console.log('Browser plugin changed!')
          window.location.reload()
        }
        // @ts-ignore
        window.ethereum.on('accountsChanged', onbrowserPlugin)
        // @ts-ignore
        window.ethereum.on('chainChanged', onbrowserPlugin)
        // @ts-ignore
        window.ethereum._listenerAdded = true
      }
    }
  }

  const [lastBlock, setLastBlock]: [BlockOrNull, BlockSetterOrNull] = useState<BlockOrNull>(null)
  const [blockFirstSeen, setBlockFirstSeen]: [BlockOrNull, BlockSetterOrNull] =
    useState<BlockOrNull>(null)
  const [network, setNetwork]: [NetworkOrNull, NetworkSetterOrNull] = useState<NetworkOrNull>(null)
  const [web3Provider, setWeb3Provider] = useState<BrowserProviderOrNull>(
    // @ts-ignore
    typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
      ? // @ts-ignore
        new ethers.BrowserProvider(window.ethereum)
      : null
  )

  useEffect(() => {
    maybeAddWalletListener()
    // Define a function to fetch the block number
    const fetchLastBlock = () =>
      web3Provider?.getBlock('latest').then((b) => {
        setLastBlock(b)
        if (!blockFirstSeen) {
          setBlockFirstSeen(b)
        }
      })

    const fetchNetwork = () => web3Provider?.getNetwork().then((n) => setNetwork(n))
    const syncWithBlockChain = () => {
      fetchLastBlock()
      fetchNetwork()
    }
    // Fetch the block number immediately on component mount
    syncWithBlockChain()

    // Set up an interval to fetch the block number every 12 seconds
    const interval = setInterval(syncWithBlockChain, 12000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [])

  return (
    <Context.Provider
      value={{
        ethersProvider: {
          web3Provider: web3Provider,
          web3ProviderSetter: setWeb3Provider,
          lastBlock: lastBlock,
          lastBlockSetter: setLastBlock,
          blockFirstSeen: null,
          blockFirstSeenSetter: null,
          defaultMainNetProvider: ethers.getDefaultProvider('mainnet'),
          network: network,
          networkSetter: setNetwork,
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

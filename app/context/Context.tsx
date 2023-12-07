'use client'

import { createContext, Dispatch, SetStateAction } from 'react'
import { ethers } from 'ethers'

export interface EthersProvider {
  web3Provider: ethers.BrowserProvider | null
  defaultMainNetProvider: ethers.Provider
}

export interface ContextType {
  ethersProvider: EthersProvider | null
}

export function createDefaultState() {
  const ad = ethers.getDefaultProvider('mainnet')
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

    return {
      ethersProvider: {
        // @ts-ignore
        web3Provider: new ethers.BrowserProvider(window.ethereum),
        defaultMainNetProvider: ad,
      },
    }
  } else
    return {
      ethersProvider: {
        web3Provider: null,
        defaultMainNetProvider: ad,
      },
    }
}

const Context = createContext<ContextType>(createDefaultState())

export default Context

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
    console.log(`Browser provider initialized.`)
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

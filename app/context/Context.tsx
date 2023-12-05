'use client'

import { createContext, Dispatch, SetStateAction } from 'react'
import { ethers } from 'ethers'

export interface EthersProvider {
  web3Provider: ethers.BrowserProvider | null
}

export interface ContextType {
  ethersProvider: EthersProvider | null
}

export function createDefaultState() {
  // @ts-ignore
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    console.log(`Browser provider initialized.`)
    return {
      ethersProvider: {
        // @ts-ignore
        web3Provider: new ethers.BrowserProvider(window.ethereum),
      },
    }
  } else return { ethersProvider: { web3Provider: null } }
}

const Context = createContext<ContextType>(createDefaultState())

export default Context

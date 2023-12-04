'use client'

import { createContext, Dispatch, SetStateAction } from 'react'
import { ethers } from 'ethers'

export interface EthersProvider {
  web3Provider: ethers.BrowserProvider | null
}

export interface ContextType {
  ethersProvider: EthersProvider | null
}

export const defaultState: ContextType = {
  ethersProvider: { web3Provider: null },
}

const Context = createContext<ContextType>(defaultState)

export default Context

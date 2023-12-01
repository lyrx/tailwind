'use client'

import { createContext, Dispatch, SetStateAction } from 'react'
import { ethers } from 'ethers'

export interface EthersProvider {
  web3Provider: ethers.Provider | null
}

export interface EthereumContextType {
  ethersProvider: EthersProvider | null
}

export const defaultState: EthereumContextType = {
  ethersProvider: { web3Provider: null },
}

const EthereumContext = createContext<EthereumContextType>(defaultState)

export default EthereumContext

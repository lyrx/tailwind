'use client'

import { createContext } from 'react'
import {
  BlockOrNull,
  BlockSetterOrNull,
  BrowserProviderOrNull,
  BrowserProviderSetterOrNull,
  EthersContextType,
  ProviderOrNull,
} from '@/components/ethereum/EthersDerivedTypes'
import { ethers } from 'ethers'


const Context = createContext<EthersContextType>({
  ethersProvider: {
    web3Provider: null,
    web3ProviderSetter: null,
    lastBlock: null,
    lastBlockSetter: null,
    defaultMainNetProvider: ethers.getDefaultProvider('mainnet'),
  },
})

export default Context

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

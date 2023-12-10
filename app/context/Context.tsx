'use client'

import { createContext } from 'react'
import { ethers } from 'ethers'
import {
  BlockOrNull,
  BlockSetterOrNull,
  BrowserProviderOrNull,
  BrowserProviderSetterOrNull,
  EthersContextType,
  ProviderOrNull,
  ProviderSetterOrNull,
} from '@/components/ethereum/EthersDerivedTypes'

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
export function createEmptyState(
  aLastBlock: BlockOrNull,
  aSetLastBlock: BlockSetterOrNull,
  aDefaultProvider: ProviderOrNull,
  aSetDefaultProvider: ProviderSetterOrNull,
  aWeb3Provider: BrowserProviderOrNull,
  aSetWeb3Provider: BrowserProviderSetterOrNull
) {
  maybeAddWalletListener()
  return {
    ethersProvider: {
      web3Provider: aWeb3Provider,
      web3ProviderSetterOrNull: aSetWeb3Provider,
      lastBlock: aLastBlock,
      lastBlockSetterOrNull: aSetLastBlock,
      defaultMainNetProvider: aDefaultProvider,
      defaultMainNetProviderSetterOrNull: aSetDefaultProvider,
    },
  }
}

const Context = createContext<EthersContextType>(
  createEmptyState(null, null, null, null, null, null)
)

export default Context

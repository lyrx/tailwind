'use client'
import React, { useState, ReactNode } from 'react'
import EthereumContext, { EthereumContextType, defaultState } from './EthereumContext'
interface Props {
  children: ReactNode
}

const EthereumContextProvider: React.FC<Props> = ({ children }) => {
  const [ethersContext, setEthersContext] = useState<EthereumContextType>(defaultState)

  return <EthereumContext.Provider value={defaultState}>{children}</EthereumContext.Provider>
}

export default EthereumContextProvider

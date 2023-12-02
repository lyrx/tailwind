'use client'
import React, { useState, ReactNode } from 'react'
import Context, { ContextType, defaultState } from './Context'
interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [ethersContext, setEthersContext] = useState<ContextType>(defaultState)

  return <Context.Provider value={defaultState}>{children}</Context.Provider>
}

export default ContextProvider

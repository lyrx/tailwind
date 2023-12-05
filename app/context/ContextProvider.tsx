'use client'
import React, { useState, ReactNode } from 'react'
import Context, { createDefaultState } from './Context'
interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  return <Context.Provider value={createDefaultState()}>{children}</Context.Provider>
}

export default ContextProvider

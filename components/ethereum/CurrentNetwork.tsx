'use client'

import React, { useContext } from 'react'
import Context from '../../app/context/Context'

const CurrentNetwork: React.FC = () => {
  const context = useContext(Context)
  return context.ethersProvider?.network ? (
    <span>{context.ethersProvider.network.name}</span>
  ) : (
    <span>`--`</span>
  )
}

export default CurrentNetwork

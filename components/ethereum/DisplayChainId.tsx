'use client'

import React, { useContext } from 'react'
import Context from '../../app/context/Context'

const DisplayChainId: React.FC = () => {
  const context = useContext(Context)
  return context.ethersProvider?.network ? (
    <span>{context.ethersProvider.network?.chainId.toString()}</span>
  ) : (
    <span>--</span>
  )
}

export default DisplayChainId

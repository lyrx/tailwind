'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BlockFirstSeenTimestamp: React.FC = () => {
  const context = useContext(Context)
  return (
    <span>
      {context.ethersProvider?.blockFirstSeen
        ? new Date(context.ethersProvider.blockFirstSeen.timestamp * 1000).toLocaleTimeString()
        : '--'}
    </span>
  )
}

export default BlockFirstSeenTimestamp

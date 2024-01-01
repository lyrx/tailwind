'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BlockLastSeenTimestamp: React.FC = () => {
  const context = useContext(Context)
  return (
    <span>
      {context.ethersProvider?.lastBlock
        ? new Date(context.ethersProvider.lastBlock.timestamp * 1000).toLocaleTimeString()
        : '--'}
    </span>
  )
}

export default BlockLastSeenTimestamp

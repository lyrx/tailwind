'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BlocksCreated: React.FC = () => {
  const context = useContext(Context)
  return (
    <span>
      {context.ethersProvider?.lastBlock && context.ethersProvider?.blockFirstSeen
        ? (
            context.ethersProvider.lastBlock.number - context.ethersProvider.blockFirstSeen.number
          ).toString()
        : '--'}
    </span>
  )
}

export default BlocksCreated

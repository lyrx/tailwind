'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { BigNumberish, ethers } from 'ethers'

const BlockLastSeenNumber: React.FC = () => {
  const context = useContext(Context)
  return (
    <span>
      {context.ethersProvider?.lastBlock
        ? context.ethersProvider.lastBlock.number.toString()
        : '--'}
    </span>
  )
}

export default BlockLastSeenNumber

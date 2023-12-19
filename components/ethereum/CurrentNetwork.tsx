'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import { ethers } from 'ethers'

const CurrentNetwork: React.FC = () => {
  const context = useContext(Context)
  return context.ethersProvider?.network ? (
    <span>{context.ethersProvider.network.name}</span>
  ) : (
    <span>`--`</span>
  )
}

export default CurrentNetwork

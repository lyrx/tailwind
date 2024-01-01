'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'

const MaybeNoBrowserProvider: React.FC = () => {
  const context = useContext(Context)
  const [errorMessage, setErrorMessage] = useState<string>(
    `Initializing Connection to  the network`
  )
  useEffect(() => {
    if (context?.ethersProvider?.web3Provider) {
      setErrorMessage('')
    } else {
      setErrorMessage('Connection to network is not possible. No browser plugin has been found.')
    }
  }, [context?.ethersProvider?.web3Provider])
  return (
    <p className={'text-primary-500'}>
      <span>{errorMessage}</span>
    </p>
  )
}

export default MaybeNoBrowserProvider

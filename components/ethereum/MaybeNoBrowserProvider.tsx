'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'

const MaybeNoBrowserProvider: React.FC = () => {
  const context = useContext(Context)
  const [errorMessage, setErrorMessage] = useState<string>(
    `Initializing Connection to Ethereum Network`
  )
  useEffect(() => {
    if (context?.ethersProvider?.web3Provider) {
      setErrorMessage('Browser Plugin found. (MetaMask or similar)')
    } else if (context?.ethersProvider?.defaultMainNetProvider) {
      setErrorMessage(
        'Connection to Ethereum Network limited, no Browser Plugin found. ' +
          'There is still a limited read-only connectivity to the Ethereum Main-Network.'
      )
    } else {
      setErrorMessage('Connection to Ethereum Network not possible.')
    }
  }, [context?.ethersProvider?.web3Provider])
  return <span>{errorMessage}</span>
}

export default MaybeNoBrowserProvider
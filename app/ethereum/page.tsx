'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../context/Context'
import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'

const EthComponent: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const context = useContext(Context)
  useEffect(() => {
    setIsInitialized(true)
  }, [context?.ethersProvider?.web3Provider])

  const whenInitialized = () => (
    <div>
      {' '}
      <p>
        Address: <CurrentSignerAddress />: ETH <CurrentSignerBalance /> (<CurrentNetwork />
        -Network)
      </p>
    </div>
  )
  const whenNotInitialized = () => (
    <div>
      <p>'Initializing'</p>
    </div>
  )
  return isInitialized ? whenInitialized() : whenNotInitialized()
}

export default EthComponent

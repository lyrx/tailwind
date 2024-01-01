'use client'

import React, { useContext, useEffect, useState } from 'react'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'
import Context from '../../app/context/Context'
import LoginButton from '@/components/LoginButton'

const CurrentNetworkOverview: React.FC = () => {
  const context = useContext(Context)
  const [hasSigner, setHasSigner] = useState<boolean>(false)
  useEffect(() => {
    context?.ethersProvider?.web3Provider
      ?.getSigner()
      .then((s) => setHasSigner(s !== null && s !== undefined))
  }, [context?.ethersProvider])

  return hasSigner ? (
    <>
      <LoginButton />
    </>
  ) : null
}

export default CurrentNetworkOverview

'use client'

import React, { useContext, useEffect, useState } from 'react'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import BlockLastSeenNumber from '@/components/ethereum/BlockLastSeenNumber'
import BlockLastSeenTimestamp from '@/components/ethereum/BlockLastSeenTimestamp'
import Watch from '@/components/ethereum/Watch'
import Context from '../../app/context/Context'
import DisplayChainId from '@/components/ethereum/DisplayChainId'
import FirstPluginDisplay from '@/components/ethereum/FirstPluginDisplay'
import BlockFirstSeenTimestamp from '@/components/ethereum/BlockFirstSeenTimestamp'
import ElapsedTime from '@/components/ethereum/ElapsedTime'
import BlocksCreated from '@/components/ethereum/BlocksCreated'

const CurrentNetworkOverview: React.FC = () => {
  const context = useContext(Context)
  const [hasNetwork, setHasNetwork] = useState<boolean>(false)
  useEffect(() => {
    context?.ethersProvider?.web3Provider
      ?.getNetwork()
      .then((n) => setHasNetwork(n !== null && n !== undefined))
  }, [context?.ethersProvider?.web3Provider])

  return hasNetwork ? (
    <>
      <p className={'text-primary-500'}>
        On '<CurrentNetwork />' (Network-ID: <DisplayChainId />
        ), counting <BlocksCreated /> new blocks <ElapsedTime />
      </p>
    </>
  ) : null
}

export default CurrentNetworkOverview

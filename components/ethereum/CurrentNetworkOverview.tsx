'use client'

import React, { useContext, useEffect, useState } from 'react'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import Context from '../../app/context/Context'
import DisplayChainId from '@/components/ethereum/DisplayChainId'
import ElapsedTime from '@/components/ethereum/ElapsedTime'
import BlocksCreated from '@/components/ethereum/BlocksCreated'
import config from '../../app/config'
import BlockFirstSeenTimestamp from '@/components/ethereum/BlockFirstSeenTimestamp'

const CurrentNetworkOverview: React.FC = () => {
  const context = useContext(Context)
  const [hasNetwork, setHasNetwork] = useState<boolean>(false)
  const introStyle = 'text-primary-500'
  useEffect(() => {
    context?.ethersProvider?.web3Provider
      ?.getNetwork()
      .then((n) => setHasNetwork(n !== null && n !== undefined))
  }, [context?.ethersProvider?.web3Provider])

  return hasNetwork ? (
    <>
      <p className={introStyle}>
        This page syncs with '<CurrentNetwork />' (Network-ID: <DisplayChainId />) every{' '}
        {config().syncRateMilliseconds} milliseconds.
      </p>
      <p className={introStyle}>
        Time between first detected block and latest detected block is <ElapsedTime />.
      </p>
      <p className={introStyle}>
        Counting <BlocksCreated /> new blocks since <BlockFirstSeenTimestamp />
      </p>
    </>
  ) : null
}

export default CurrentNetworkOverview

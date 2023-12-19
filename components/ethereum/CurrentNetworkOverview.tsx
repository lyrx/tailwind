'use client'

import React, { useContext, useEffect, useState } from 'react'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import LastBlockNumber from '@/components/ethereum/LastBlockNumber'
import LastBlockTimestamp from '@/components/ethereum/LastBlockTimestamp'
import Watch from '@/components/ethereum/Watch'
import Context from '../../app/context/Context'
import DisplayChainId from '@/components/ethereum/DisplayChainId'
import FirstPluginDisplay from '@/components/ethereum/FirstPluginDisplay'

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
        Connected to the <CurrentNetwork /> network (<DisplayChainId />).
      </p>

      <table className="table-auto">
        <tbody>
          <tr>
            <td>Last Block Number:</td>
            <td>
              <LastBlockNumber />
            </td>
          </tr>
          <tr>
            <td>Last block timestamp:</td>
            <td>
              <LastBlockTimestamp />
            </td>
          </tr>
          <tr>
            <td>Current Time:</td>
            <td>
              <Watch />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ) : null
}

export default CurrentNetworkOverview

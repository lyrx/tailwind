'use client'

import React from 'react'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import LastBlockNumber from '@/components/ethereum/LastBlockNumber'
import LastBlockTimestamp from '@/components/ethereum/LastBlockTimestamp'
import Watch from '@/components/ethereum/Watch'

const CurrentNetworkOverview: React.FC = () => {
  return (
    <>
      <h2>
        Current network: '<CurrentNetwork />'
      </h2>
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
  )
}

export default CurrentNetworkOverview

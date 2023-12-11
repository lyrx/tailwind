'use client'

import React from 'react'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'

const CurrentNetworkOverview: React.FC = () => {
  return (
    <>
      <h2>Signer</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Address</th>
            <th>Balance (ETH)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CurrentSignerAddress />
            </td>
            <td>
              <CurrentSignerBalance />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CurrentNetworkOverview

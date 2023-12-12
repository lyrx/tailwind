'use client'

import React, { useContext, useEffect, useState } from 'react'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'
import Context from '../../app/context/Context'

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
      <h2>Signer</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CurrentSignerAddress />
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Balance (ETH)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CurrentSignerBalance />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ) : null
}

export default CurrentNetworkOverview

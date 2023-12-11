'use client'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'
import MaybeNoBrowserProvider from '@/components/ethereum/MaybeNoBrowserProvider'
import SectionContainer from '@/components/SectionContainer'
import NameOf from '@/components/ethereum/ERC20/NameOf'
import SignerBalance from '@/components/ethereum/ERC20/SignerBalance'
import BlockNumberMainNet from '@/components/ethereum/BlockNumberMainNet'
import LastBlockTimestamp from '@/components/ethereum/LastBlockTimestamp'
import React, { useEffect, useContext, useState } from 'react'
import Context from '../context/Context'
import ContextProvider from '../context/ContextProvider'
import { BlockOrNull, BlockSetterOrNull } from '@/components/ethereum/EthersDerivedTypes'
import Watch from '@/components/ethereum/Watch'
import LastBlockNumber from '@/components/ethereum/LastBlockNumber'
import Tokens from '@/components/ethereum/ERC20/Tokens'
// @ts-ignore
const EthComponent: React.FC = () => {
  const context = useContext(Context)

  return (
    <ContextProvider>
      {' '}
      <SectionContainer>
        <article>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <h1>Ethereum Network: Overview</h1>
              <p className={'text-primary-500'}>
                <MaybeNoBrowserProvider />
              </p>
              <h2>
                Current Net: '<CurrentNetwork />'
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
            <Tokens  />
            </div>
          </div>
        </article>
      </SectionContainer>{' '}
    </ContextProvider>
  )
}

export default EthComponent

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
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>ERC20 Token</th>
                    <th>Signer Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                    '0x514910771AF9Ca656af840dff83E8264EcF986CA',
                    '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
                    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                    '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
                    '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
                  ].map((a) => (
                    <tr key={a}>
                      <td>
                        <NameOf contractAddress={a} />
                      </td>
                      <td>
                        <SignerBalance contractAddress={a} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </SectionContainer>{' '}
    </ContextProvider>
  )
}

export default EthComponent

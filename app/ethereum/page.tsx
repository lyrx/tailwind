'use client'

import MaybeNoBrowserProvider from '@/components/ethereum/MaybeNoBrowserProvider'
import SectionContainer from '@/components/SectionContainer'
import React, { useContext } from 'react'
import Context from '../context/Context'
import Tokens from '@/components/ethereum/ERC20/Tokens'
import CurrentNetworkOverview from '@/components/ethereum/CurrentNetworkOverview'
import CurrentSignerOverview from '@/components/ethereum/CurrentSignerOverview'
import ContextProvider from '../context/ContextProvider'

const EthComponent: React.FC = () => {
  return (
    <ContextProvider>
      {' '}
      <SectionContainer>
        <article>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <MaybeNoBrowserProvider />
              <CurrentSignerOverview /> <CurrentNetworkOverview /> <Tokens />
            </div>
          </div>
        </article>
      </SectionContainer>{' '}
    </ContextProvider>
  )
}

export default EthComponent

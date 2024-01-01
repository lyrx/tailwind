'use client'

import MaybeNoBrowserProvider from '@/components/ethereum/MaybeNoBrowserProvider'
import SectionContainer from '@/components/SectionContainer'
import React from 'react'
import CurrentNetworkOverview from '@/components/ethereum/CurrentNetworkOverview'
import ContextProvider from '../context/ContextProvider'

const EthComponent: React.FC = () => {
  return (
    <ContextProvider>
      {' '}
      <SectionContainer>
        <article>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <h1>Blockchain Network Connection</h1>
              <MaybeNoBrowserProvider />
              <CurrentNetworkOverview />
            </div>
          </div>
        </article>
      </SectionContainer>{' '}
    </ContextProvider>
  )
}

export default EthComponent

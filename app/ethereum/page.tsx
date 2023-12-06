'use client'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'
import SectionContainer from '@/components/SectionContainer'

const EthComponent: React.FC = () => (
  <SectionContainer>
    <article>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
          <h1>Ethereum Network</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Signer Address</th>
                <th>Signer Balance (ETH)</th>
                <th>Network</th>
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
                <td>
                  <CurrentNetwork />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  </SectionContainer>
)

export default EthComponent

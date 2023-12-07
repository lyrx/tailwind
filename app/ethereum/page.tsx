'use client'

import CurrentNetwork from '@/components/ethereum/CurrentNetwork'
import CurrentSignerAddress from '@/components/ethereum/CurrentSignerAddress'
import CurrentSignerBalance from '@/components/ethereum/CurrentSignerBalance'
import SectionContainer from '@/components/SectionContainer'
import NameOf from '@/components/ethereum/ERC20/NameOf'
import SignerBalance from '@/components/ethereum/ERC20/SignerBalance'
// @ts-ignore
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
          <h1>ERC20</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Token</th>
                <th>SignerBalance</th>
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
  </SectionContainer>
)

export default EthComponent

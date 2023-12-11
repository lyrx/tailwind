'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../../app/context/Context'
import NameOf from '@/components/ethereum/ERC20/NameOf'
import SignerBalance from '@/components/ethereum/SignerBalance'

const Tokens: React.FC = () => {
  const context = useContext(Context)
  const [tokens, setTokens] = useState<string[]>([])
  useEffect(() => {
    context?.ethersProvider?.web3Provider?.getNetwork().then((n) => {
      const netWorkName = n.name
      if (netWorkName === 'mainnet') {
        setTokens([
          '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          '0x514910771AF9Ca656af840dff83E8264EcF986CA',
          '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
          '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
          '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
        ])
      } else if (netWorkName === 'matic') {
        setTokens([
          //    '0xDdC34e3745ADB986a42392cEBFA2C24F72E24D4a'
        ])
      }
    })
  }, [context?.ethersProvider?.web3Provider])
  return tokens.length > 0 ? (
    <>
      <h2>ERC20 Tokens</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Signer Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((a) => (
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
    </>
  ) : null
}

export default Tokens

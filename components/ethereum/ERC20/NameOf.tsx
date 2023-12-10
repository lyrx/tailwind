'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../../app/context/Context'
import ERC20 from './ERC20'

const NameOf: React.FC<{ contractAddress: string }> = ({ contractAddress }) => {
  const context = useContext(Context)
  const [name, setName] = useState<string>('--')
  useEffect(() => {
    context.ethersProvider?.web3Provider?.getSigner().then((s) => {
      return s.getAddress().then((a) => {
        const address = a
        const fetchName = () => {
          const tokenContract = ERC20.getERC20TokenContract(
            contractAddress,
            // @ts-ignore
            context.ethersProvider?.web3Provider
          )
          tokenContract.name().then((n) => setName(n))
        }
        fetchName()
        return () => {}
      })
    })
    // Clean up the interval when the component unmounts
  }, [context.ethersProvider?.web3Provider])
  return <span>{name}</span>
}

export default NameOf

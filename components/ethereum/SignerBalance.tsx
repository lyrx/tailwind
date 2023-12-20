'use client'

import React, { useEffect, useState, useContext } from 'react'
import Context from '../../app/context/Context'
import ERC20 from './ERC20/ERC20'
import { ethers, Signer } from 'ethers'

const SignerBalance: React.FC<{ contractAddress: string }> = ({ contractAddress }) => {
  const context = useContext(Context)
  const [balance, setBalance] = useState<string>('--')

  function signerDemo(signer: Signer) {
    const message = 'Your message here'
    signer.signMessage(message).then((signature: string) => {
      const signerAddress = ethers.verifyMessage(message, signature)
      signer.getAddress().then((address: string) => {
        if (address === signerAddress) {
          // signature check good!
        } else {
          // signature check bad!
        }
      })
    })
  }

  useEffect(() => {
    context.ethersProvider?.web3Provider?.getSigner().then((s) => {
      return s.getAddress().then((a) => {
        const address = a
        const fetchBalance = () => {
          const tokenContract = ERC20.getERC20TokenContract(
            contractAddress,
            // @ts-ignore
            context.ethersProvider?.web3Provider
          )
          tokenContract.balanceOf(a).then((b) => setBalance(ethers.formatEther(b)))
        }
        fetchBalance()
        const interval = setInterval(fetchBalance, 12000)
        return () => clearInterval(interval)
      })
    })
    // Clean up the interval when the component unmounts
  }, [context.ethersProvider?.web3Provider])
  return <span>{balance}</span>
}

export default SignerBalance

'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const MetaMaskButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      setMounted(true)
    }
  }, [])

  if (!mounted) {
    return null
  }
  const background = resolvedTheme === 'light' ? 'white' : 'black'
  const foreground = resolvedTheme === 'light' ? 'gray' : 'white'
  return (
    <a
      href={'/ethereum/metamask'}
      aria-label="Ethereum and MetaMask"
      onClick={() => {}}
      title={'Ethereum and MetaMask'}
    >
     <Image src={"/images/MetaMask_Fox.svg"} alt={"MetaMask Fox"} />
    </a>
  )
}

export default MetaMaskButton

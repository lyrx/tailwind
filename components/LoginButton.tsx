'use client'

import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Context from '../app/context/Context'
import { ethers } from 'ethers'
const LoginButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const context = useContext(Context)
  // When mounted on client, now we can show the UI
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      context.ethersProvider = {
        // @ts-ignore
        web3Provider: new ethers.BrowserProvider(window.ethereum),
      }
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
      href={'/ethereum'}
      aria-label="MetaMask Login-Button"
      onClick={() => {}}
      title={'Login with MetaMask'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1">
        <rect width="25" height="25" fill={background} />
        <circle cx="12" cy="12" r="9" fill="none" stroke={foreground} />
        <circle cx="12" cy="10" r="3" fill={foreground} />
        <rect x="11" y="12" width="2" height="6" fill={foreground} />
      </svg>
    </a>
  )
}

export default LoginButton

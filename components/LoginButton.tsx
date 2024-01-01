'use client'

import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Context from '../app/context/Context'
import { ethers } from 'ethers'
const LoginButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [signer, setSigner] = useState<ethers.Signer | null>(null)
  const context = useContext(Context)
  // When mounted on client, now we can show the UI
  const background = resolvedTheme === 'light' ? 'white' : 'black'
  const foreground = resolvedTheme === 'light' ? 'gray' : 'white'
  useEffect(() => {
    context?.ethersProvider?.web3Provider?.getSigner().then((s) => setSigner(s))
  }, [context?.ethersProvider])

  return (
    <a
      href={'/ethereum'}
      aria-label="MetaMask Login-Button"
      onClick={() => {
        signer?.signMessage('sdfsfd')
      }}
      title={'Login with MetaMask'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="24" version="1.1">
        <rect width="25" height="25" fill={background} />
        <circle cx="12" cy="12" r="9" fill="none" stroke={foreground} />
        <circle cx="12" cy="10" r="3" fill={foreground} />
        <rect x="11" y="12" width="2" height="6" fill={foreground} />
        <text x="25" y="18" fontFamily="Arial" fontSize="15" fill={foreground}>
          Login
        </text>
      </svg>
    </a>
  )
}

export default LoginButton

'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import logoDark from '../public/static/images/logo2-dark.png'
import logoBright from '../public/static/images/logo2-bright.png'

const MetaMaskButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      setMounted(true)
    }
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Link
      key={'MetaMask Login-Button'}
      href={'/ethereum/metamask'}
      className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
    >
      {' '}
      <Image
        src={'/static/images/MetaMask.png'}
        priority={true}
        alt="Ethereum and MetaMask"
        title={'Ethereum and MetaMask'}
        width={'25'}
        height={'25'}
      />{' '}
    </Link>
  )
}

export default MetaMaskButton

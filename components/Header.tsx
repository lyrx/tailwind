'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import LoginButton from './LoginButton'
import Image from 'next/image'
import logoBright from '../public/static/images/logo2-bright.png'
import logoDark from '../public/static/images/logo2-dark.png'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* eslint-disable-next-line prettier/prettier */}
              <Image src={theme === 'dark' ? logoDark : logoBright} priority={true} alt="Alexander's Blog" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}{' '}
        <SearchButton /> <ThemeSwitch /> <LoginButton /> <MobileNav />
      </div>
    </header>
  )
}

export default Header

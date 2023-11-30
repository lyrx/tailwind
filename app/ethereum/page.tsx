'use client'

import React, { useEffect, useState } from 'react'

const MyComponent: React.FC = () => {
  const [ethereum, setEthereum] = useState(null)

  useEffect(() => {
    // Ensure ethereum is available
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      const checkEthereum = () => {
        // Set ethereum
        // @ts-ignore
        setEthereum(window.ethereum)
      }

      // Add event listener
      window.addEventListener('resize', checkEthereum)

      // Call the handler right away so state gets updated with initial window size
      checkEthereum()
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', checkEthereum)
    }
  }, []) // Empty array ensures that effect runs only on mount
  // @ts-ignore
  return (
    <div>
      <p>Window ethereum: {ethereum ? 'Ethereum' : 'not set'}</p>
    </div>
  )
}

export default MyComponent

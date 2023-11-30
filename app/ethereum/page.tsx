'use client'

import React, { useEffect, useState } from 'react'

const MyComponent: React.FC = () => {
  const [ethereum, setEthereum] = useState(null)

  useEffect(() => {
    // Ensure ethereum is available
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      // Set ethereum
      // @ts-ignore
      setEthereum(window.ethereum)
    }
  }, []) // Empty array ensures that effect runs only on mount
  // @ts-ignore
  return (
    <div>
      <p>Window ethereum: {ethereum ? 'Ethereum found' : 'Ethereum not found'}</p>
    </div>
  )
}

export default MyComponent

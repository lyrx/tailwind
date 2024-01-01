'use client'

import React, { useContext } from 'react'
import Context from '../../app/context/Context'

const FirstPluginDisplay: React.FC = () => {
  const context = useContext(Context)

  // Assuming `plugins` is an array within the `context.ethersProvider`
  const firstPlugin = context.ethersProvider?.network?.plugins[0]

  return (
    <>
      {firstPlugin ? (
        <span>{firstPlugin.name}</span> // Replace `name` with the appropriate property of the plugin
      ) : (
        <span>--</span>
      )}
    </>
  )
}

export default FirstPluginDisplay

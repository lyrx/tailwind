'use client'

import { createContext, Dispatch, SetStateAction } from 'react'
import { ethers } from 'ethers'

export interface EthersProvider {
  web3Provider: ethers.BrowserProvider | null
  defaultMainNetProvider: ethers.Provider
}

export interface ContextType {
  ethersProvider: EthersProvider | null
}

/*


import { ethers } from 'ethers';

// Check if window.ethereum is available
if (window.ethereum) {
    // Create a Web3Provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Listen for account changes
    window.ethereum.on('accountsChanged', (accounts) => {
        console.log('Accounts changed:', accounts);
        // Handle the accounts change
        // You might want to reset the state, re-fetch data, etc.
    });

    // Listen for network changes (chainId)
    window.ethereum.on('chainChanged', (chainId) => {
        console.log('Chain changed:', chainId);
        // Handle the network change
        // You may need to check if the new network is supported, etc.
    });

    // Optionally, listen for network changes (legacy method)
    provider.on('network', (newNetwork, oldNetwork) => {
        if (oldNetwork) {
            console.log(`Network changed from ${oldNetwork.name} to ${newNetwork.name}`);
            // Handle the network change
        }
    });
} else {
    console.log('Please install MetaMask!');
}


 */

/*
import React, { useEffect } from 'react';
import { ethers } from 'ethers';

const YourComponent = () => {
    useEffect(() => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Define the event handler functions
            const handleAccountsChanged = (accounts) => {
                console.log('Accounts changed:', accounts);
                // ... Handle account changes
            };

            const handleChainChanged = (chainId) => {
                console.log('Chain changed:', chainId);
                // ... Handle chain changes
            };

            // Add event listeners
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);

            // Cleanup function to remove the event listeners
            return () => {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            };
        } else {
            console.log('Please install MetaMask!');
        }
    }, []); // Empty dependency array ensures this effect runs only once

    // ... Rest of your component

    return (
        <div>
            // youre component goes here.
}
</div>
)

}


export default YourComponent

*/

export function createDefaultState() {
  const ad = ethers.getDefaultProvider('mainnet')
  // @ts-ignore
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    console.log(`Browser provider initialized.`)
    return {
      ethersProvider: {
        // @ts-ignore
        web3Provider: new ethers.BrowserProvider(window.ethereum),
        defaultMainNetProvider: ad
      }
    }
  } else
    return {
      ethersProvider: {
        web3Provider: null,
        defaultMainNetProvider: ad
      }
    }
}

const Context = createContext<ContextType>(createDefaultState())

export default Context

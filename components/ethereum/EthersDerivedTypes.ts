import { Block, BrowserProvider, Provider, Network } from 'ethers'
export type BlockOrNull = Block | null | undefined
export type BlockSetter = (value: ((prevState: BlockOrNull) => BlockOrNull) | Block | null) => void
export type BlockSetterOrNull = BlockSetter | null | undefined

export type BrowserProviderOrNull = BrowserProvider | null | undefined
export type BrowserProviderSetter = (
  value: ((prevState: BrowserProviderOrNull) => BrowserProviderOrNull) | BrowserProvider | null
) => void
export type BrowserProviderSetterOrNull = BrowserProviderSetter | null | undefined
export type ProviderOrNull = Provider | null | undefined

export type EthersProviderOrNull = EthersProvider | null | undefined

export interface EthersContextType {
  ethersProvider: EthersProviderOrNull
}

export type NetworkOrNull = Network | null | undefined
export type NetworkSetter = (
  value: ((prevState: NetworkOrNull) => NetworkOrNull) | Network | null
) => void
export type NetworkSetterOrNull = NetworkSetter | null | undefined
export interface EthersProvider {
  web3Provider: BrowserProviderOrNull
  web3ProviderSetter: BrowserProviderSetterOrNull
  lastBlock: BlockOrNull
  lastBlockSetter: BlockSetterOrNull
  network: NetworkOrNull
  networkSetter: NetworkSetterOrNull
  defaultMainNetProvider: ProviderOrNull
}

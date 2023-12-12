import { Block, BrowserProvider, Provider } from 'ethers'
export type BlockOrNull = Block | null | undefined
export type BlockSetter = (value: ((prevState: BlockOrNull) => BlockOrNull) | Block | null) => void
export type BlockSetterOrNull = BlockSetter | null | undefined

export type BrowserProviderOrNull = BrowserProvider | null | undefined
export type BrowserProviderSetter = (
  value: ((prevState: BrowserProviderOrNull) => BrowserProviderOrNull) | BrowserProvider | null
) => void
export type BrowserProviderSetterOrNull = BrowserProviderSetter | null | undefined
export type ProviderOrNull = Provider | null | undefined

export interface EthersProvider {
  web3Provider: BrowserProviderOrNull
  web3ProviderSetterOrNull: BrowserProviderSetterOrNull
  lastBlock: BlockOrNull
  lastBlockSetterOrNull: BlockSetterOrNull
  defaultMainNetProvider: ProviderOrNull
}
export type EthersProviderOrNull = EthersProvider | null | undefined

export interface EthersContextType {
  ethersProvider: EthersProviderOrNull
}

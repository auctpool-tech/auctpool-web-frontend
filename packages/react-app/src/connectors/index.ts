import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'

const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '1')
export const NETWORK_URL: string | undefined = process.env.REACT_APP_NETWORK_URL


if (typeof NETWORK_URL === 'undefined' || NETWORK_CHAIN_ID === 0) {
    throw new Error('NETWORK_URL / NETWORK_CHAIN_ID configed error.')
}

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
})


export const walletconnect = new WalletConnectConnector({
    rpc: { 1: NETWORK_URL },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 15000
})

export const fortmatic = new FortmaticConnector({
    apiKey: FORMATIC_KEY ?? '',
    chainId: 1
})
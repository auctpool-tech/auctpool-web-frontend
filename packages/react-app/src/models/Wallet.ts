import { AbstractConnector } from '@web3-react/abstract-connector'
import { fortmatic, injected, walletconnect } from '../connectors'

export interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconName: string
}

export const SUPPORTED_WALLETS: {[key: string]: WalletInfo} = {
    INJECTED: {
        connector: injected,
        name: "Injected",
        iconName: ""
    },
    METAMASK: {
        connector: injected,
        name: "Metamask",
        iconName: ""
    },
    WALLET_CONNECT: {
        connector: walletconnect,
        name: "WalletConnect",
        iconName: ""
    },
    FORTMATIC: {
        connector: fortmatic,
        name: "Fortmatic",
        iconName: ""
    },
}


import { Token } from '../utils'
import { fortmatic, injected, walletconnect } from '../connectors'
import { WalletInfo } from '../models' 

export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42
}

export declare enum ApplicationModal {
    Loading,
    Processing,
    Biding
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

export const NETWORK_CONTEXT = 'AuctPool-Network'

export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
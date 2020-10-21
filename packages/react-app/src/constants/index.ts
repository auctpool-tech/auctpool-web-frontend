import { Token } from '@project/core'
import { fortmatic, injected, walletconnect } from '../connectors'
import { WalletInfo } from '../models' 

// import  LogoMetamask from '../assets/connect-metamask.png'
// import  LogoWalletConnect from '../assets/connect-walletconnect.png'
// import  LogoFortmatic from '../assets/connect-fortmatic.png'

export enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42
}

export enum ApplicationModal {
    Loading,
    Processing,
    Biding,
    NftListFilter,
    WalletMenu
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
        iconName: "../assets/connect-metamask.png"
    },
    WALLET_CONNECT: {
        connector: walletconnect,
        name: "WalletConnect",
        iconName: "../assets/connect-walletconnect.png"
    },
    FORTMATIC: {
        connector: fortmatic,
        name: "Fortmatic",
        iconName: "../assets/connect-fortmatic.png"
    }
}

export const NETWORK_CONTEXT = 'AuctPool-Network'

export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
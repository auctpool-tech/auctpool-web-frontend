import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Page } from '../pages'
import { Tag } from '../theme'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import Waves from '../assets/waves.png'
import { useWeb3React } from '@web3-react/core'

import usePrevious from '../hooks'
import { ApplicationModal, SUPPORTED_WALLETS } from '../constants'
import { injected } from '../connectors'

import { useModalOpened, useToggleModal } from '../state/application/hooks'
import { useHistory } from 'react-router-dom'

enum CONNECT_STATE {
    OPTIONS,
    LOADING,
    ACCOUNT
}

const Connect: React.FC = () => {
    const { active, account, connector, activate, error } = useWeb3React()
    const [ connectState, setConnectState ] = useState<CONNECT_STATE>(CONNECT_STATE.OPTIONS)
    const loadingModal = useModalOpened(ApplicationModal.Loading)
    const toggleLoadingModal = useToggleModal(ApplicationModal.Loading)
    const previousAccount = usePrevious(account)
    const activePrevious = usePrevious(active)
    const connectorPrevious = usePrevious(connector)
    const history = useHistory()
    
    useEffect(() => {
        if (connectState === CONNECT_STATE.ACCOUNT && account && !previousAccount && 
            (active && !activePrevious) && (connector && connector !== connectorPrevious) &&
            !error) {
            toggleLoadingModal()
            history.push('/explore')
        }
    }, [account, previousAccount, toggleLoadingModal, loadingModal])

    useEffect(() => {
        if (loadingModal) {
            setConnectState(CONNECT_STATE.OPTIONS)
            toggleLoadingModal()
        }
    }, [loadingModal])
    
    const tryActivation = async (connector: AbstractConnector | undefined) => {
        setConnectState(CONNECT_STATE.LOADING)
        if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
            connector.walletConnectProvider = undefined
        }
        connector && activate(connector, undefined, true)
    }

    function walletOptions() {
        const isMetamask = window.ethereum && window.ethereum.isMetaMask
        return Object.keys(SUPPORTED_WALLETS).map(key => {
            let walletInfo = SUPPORTED_WALLETS[key]
            if (walletInfo.connector === injected) {
                if (!(window.web3 || window.ethereum)) {
                    if (walletInfo.name === 'MetaMask') {
                        return (
                            <ConnectCell 
                                onClick={
                                    () => {walletInfo.connector !== connector && tryActivation(walletInfo.connector)}
                                }
                                logo={walletInfo.iconName}
                                text={walletInfo.name}
                            />
                        )
                    }
                }
                // don't return metamask if injected provider isn't metamask
                else if (walletInfo.name === 'MetaMask' && !isMetamask) {
                    return null
                }
                // likewise for generic
                else if (walletInfo.name === 'Injected' && isMetamask) {
                    return null
                }
            }
            return (
                <ConnectCell 
                    onClick={
                        () => {walletInfo.connector !== connector && tryActivation(walletInfo.connector)}
                    }
                    logo={walletInfo.iconName}
                    text={walletInfo.name}
                />
            )
        })
    }

    return (
        <Page background={Waves}>
            <StyledConnect>
                <StyledTitle>
                    <Tag.headerTitle fontSize="40px" >
                        Connect Your Wallet
                    </Tag.headerTitle>
                </StyledTitle>
                <StyledWalletList>
                    { walletOptions() }
                </StyledWalletList>
                <StyledSecurityStatement>
                    Non-custodial & Secure
                </StyledSecurityStatement>
                <StyledSecurityDisclaimer>
                    *we do not own your private keys and cannot access your funds without your confirmation.
                </StyledSecurityDisclaimer>
            </StyledConnect>
        </Page>
    )
}

interface ConnectCellProps {
    logo: string
    text: string
    onClick?: () => void
}

const ConnectCell: React.FC<ConnectCellProps> = ({
    logo, text, onClick
}) => {
    return (
        <StyledConnectCell onClick={onClick} >
            <StyledConnectCellLogo src={logo}>
            </StyledConnectCellLogo>
            <StyledConnectCellText>
                {text}
            </StyledConnectCellText>
        </StyledConnectCell>
    )
}

const StyledConnectCell = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 200px;

    border: 1px solid #D8D8D8;
    border-radius: 20px;
    margin: 0px 15px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

    ${({theme}) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        margin: 15px 15px;
    `};
    // @media screen and (max-width: 800px) {
    // }
`

const StyledConnectCellLogo = styled.img`
    width: 64px;
    height: 64px;
`

const StyledConnectCellText = styled.p`
    font-size: 18px;
`

const StyledConnect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledTitle = styled.div`
    color: ${(props) => props.theme.black};

    padding: 80px 0 0 0;
    text-align: center;
`

const StyledWalletList = styled.div`
    padding: 40px 0 0 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`

const StyledSecurityStatement = styled.p`
    margin-top: 50px;
    width: 100%;
    text-align: center;
    font-size: 16px;

    color: ${(props) => props.theme.black1};
`
const StyledSecurityDisclaimer = styled.p`
    width: 100%;
    text-align: center;
    margin-top: 20px;

    font-size: 14px;
    color: ${(props) => props.theme.black2};
`

export default Connect
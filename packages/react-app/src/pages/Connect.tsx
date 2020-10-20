import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Page } from '../pages'
import { Tag } from '../theme'

import  LogoMetamask from '../assets/connect-metamask.png'
import  LogoWalletConnect from '../assets/connect-walletconnect.png'
import  LogoFortmatic from '../assets/connect-fortmatic.png'
import Waves from '../assets/waves.png'
import { useActiveWeb3React } from '../hooks'

const Connect: React.FC = () => {
    const { account, chainId } = useActiveWeb3React()

    useEffect(() => {
        if (account) {

        }
    }, [])

    return (
        <Page background={Waves}>
            <StyledConnect>
                <StyledTitle>
                    <Tag.headerTitle fontSize="40px" >
                        Connect Your Wallet
                    </Tag.headerTitle>
                </StyledTitle>
                <StyledWalletList>
                    <ConnectCell logo={LogoMetamask} text="Metamask" onClick={() => { wallet.connect('injected') }} />
                    <ConnectCell logo={LogoWalletConnect} text="WalletConnect" onClick={() => { wallet.connect('walletconnect') }} />
                    <ConnectCell logo={LogoFortmatic} text="Fortmatic" onClick={() => { wallet.connect('fortmatic') }} />
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
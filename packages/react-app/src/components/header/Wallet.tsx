import React from 'react'
import { StyledHeaderButton } from '../../theme'
import { useWallet } from 'use-wallet'
import styled from 'styled-components'

const Wallet: React.FC = () => {
    const wallet = useWallet()

    return (
        <StyledWalletWrapper>
            { !wallet.account ? (
                <StyledHeaderButton exact activeClassName="active" to="/connect">
                    Connect Wallet
                </StyledHeaderButton>
            ): (
                <div />
            )}
        </StyledWalletWrapper>
    )
}

const StyledWalletWrapper = styled.div`
`

export default Wallet
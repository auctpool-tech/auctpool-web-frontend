import React from 'react'
import { StyledHeaderButton } from '../../theme'
import styled from 'styled-components'

const Wallet: React.FC = () => {
    return (
        <StyledWalletWrapper>
            <StyledHeaderButton exact activeClassName="active" to="/connect">
                Connect Wallet
            </StyledHeaderButton>
        </StyledWalletWrapper>
    )
}

const StyledWalletWrapper = styled.div`
`

// const StyledWalletAccount = styled.div`
//     color: ${(props) => props.theme.black1};
//     border-radius: 40px;
//     padding: 8px 15px;

//     margin-left: 25px;
//     &:hover {
//         color: ${(props) => props.theme.blue2};
//     }
// `

export default Wallet
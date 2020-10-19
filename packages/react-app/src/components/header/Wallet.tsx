import React from 'react'
import { StyledHeaderButton } from '../../theme'

const Wallet: React.FC = () => {
    return (
        <StyledHeaderButton exact activeClassName="active" to="/connect">
            Connect Wallet
        </StyledHeaderButton>
    )
}

export default Wallet
import React from 'react'
import styled from 'styled-components'
import Wallet from './Wallet'
import { StyledHeaderButton, StyledHeaderTab, StyledHeaderLink, HideSmall } from '../../theme'

const Navigator: React.FC = () => {
    return (
        <StyledNavigator>
            <StyledHeaderTab exact activeClassName="active" to="/" >
                Explore
            </StyledHeaderTab>
            <StyledHeaderTab exact activeClassName="active" to="/center" >
                User Center
            </StyledHeaderTab>
            <StyledHeaderLink href="http://www.baidu.com" target="_blank" >
                FAQ
            </StyledHeaderLink>
            <HideSmall>
                <CreateNftButton /> 
            </HideSmall>
            <Wallet />
        </StyledNavigator>
    )
}

export const CreateNftButton: React.FC = () => {
    return (
        <StyledHeaderButton exact activeClassName="active" to="/create">
            Create NFT
        </StyledHeaderButton>
    )
}

const StyledNavigator = styled.div`
    display: flex;
    align-items: center;
    margin-inline-start: auto;
`

export default Navigator
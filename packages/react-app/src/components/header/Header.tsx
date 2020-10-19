import React from 'react';
import styled from 'styled-components';

import Container from '../common/Container';
import Logo from './Logo';
import Navigator from './Navigator';

const Header: React.FC = () => {
    return (
        <Container adaptationMode="large">
            <StyledHeader>
                <Logo />
                <Navigator />
            </StyledHeader>
        </Container>
    )
}

const StyledHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: ${(props) => props.theme.headerHeight}px;

    background-color: ${(props) => props.theme.background1};
`

export default Header
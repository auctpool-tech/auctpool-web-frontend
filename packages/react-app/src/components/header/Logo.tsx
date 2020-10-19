import React from 'react';
import styled from 'styled-components';
import AuctPoolLogo from '../../assets/logo.png';

const Logo: React.FC = () => {
    return (
        <a href="/">
            <StyledLogo src={AuctPoolLogo}>
            </StyledLogo>
        </a>
    )
}

const StyledLogo = styled.img`
    width: ${(props) => props.theme.headerHeight}px;
    height: ${(props) => props.theme.headerHeight}px;
`

export default Logo
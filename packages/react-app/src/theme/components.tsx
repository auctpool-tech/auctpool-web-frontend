import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const StyledHeaderButton = styled(NavLink)`
    border-style: solid;
    border-width: 2px;
    border-color: ${(props) => props.theme.blue1};
    color: ${(props) => props.theme.blue1};
    border-radius: 40px;
    padding: 8px 15px;

    margin-left: 25px;
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.blue2};
    }
    &:press {
        color: ${(props) => props.theme.blue4};
    }
    &.active {
        color: ${(props) => props.theme.blue3};
    }
`

export const StyledHeaderTab = styled(NavLink)`
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.black3};
    margin-left: 30px;
    padding-right: 15px;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.black1};
    }

    &.active {
        color: ${(props) => props.theme.black1};
    }
`

export const StyledHeaderLink = styled.a`
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.black3};
    margin-left: 30px;
    padding-right: 15px;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme.black1};
    }

    &.active {
        color: ${(props) => props.theme.black1};
    }
`


export const Marginer = styled.div<{ multiple: number} >`
  margin-top: ${(props) => props.multiple * 5}rem;
`

export const HideSmall = styled.div`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface ContainerProps {
    children?: React.ReactNode,
    adaptationMode?: 'small' | 'middle' | 'large'
}

const Container: React.FC<ContainerProps> = ({children, adaptationMode = 'middle'}) => {
    const { adaptationWidth } = useContext<{adaptationWidth: number}>(ThemeContext)
    let siteWidth: number 
    switch (adaptationMode) {
        case 'small':
            siteWidth = adaptationWidth / 2
            break;
        case 'middle':
            siteWidth = adaptationWidth *2/3
            break;
        case 'large':
        default:
            siteWidth = adaptationWidth
            break;
    }
    return (
        <StyledContainer width={siteWidth}>
            {children}
        </StyledContainer>
    )
}

interface StyledContainerProps {
    width: number
}

const StyledContainer = styled.div<StyledContainerProps>`
    max-width: ${props => props.width}px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 24px;
`

export default Container 
import React from 'react'
import styled from 'styled-components'

interface PageProps {
    children: React.ReactNode
    background?: string
    position?: 'bottom' | 'top'
}

const Page: React.FC<PageProps> = ({children, background, position = 'bottom'}) => {
    return (
        <StyledPage>
            <StyledContent background={background} position={position}>
                {children}
            </StyledContent>
        </StyledPage>
    ) 
}

const StyledPage = styled.div`
`

const StyledContent = styled.div<PageProps>`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - ${(props) => props.theme.headerHeight}px);
    width: 100%;

    ${(props) => props.background && `
        background: url(${props.background}) no-repeat center ${props.position};
        background-size: contain;
    `}
`

export default Page
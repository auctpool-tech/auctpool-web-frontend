import React from 'react'
import styled from 'styled-components'

const Modal: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <StyledModalWrapper>
            {children}
        </StyledModalWrapper>
    )
}

const StyledModalWrapper = styled.div`

`

export default Modal
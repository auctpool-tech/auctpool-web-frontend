import React, { createContext, useCallback, useState } from 'react'
import styled from 'styled-components'
import { ApplicationModal } from '../constants'

interface ModalContextProps {
  content?: React.ReactNode,
  isOpen?: boolean,
  onPresent: (content: React.ReactNode, key?: ApplicationModal) => void,
  onDismiss: () => void
}

export const ModalContext = createContext<ModalContextProps>({
  onPresent: () => {},
  onDismiss: () => {},
})

const ModalWrapper: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode>()
  const [modalKey, setModalKey] = useState<ApplicationModal>()

  const handlePresent = useCallback((modalContent: React.ReactNode, key?: ApplicationModal) => {
    setModalKey(key)
    setContent(modalContent)
    setIsOpen(true)
  }, [setContent, setIsOpen, setModalKey])

  const handleDismiss = useCallback(() => {
    setContent(undefined)
    setIsOpen(false)
  }, [setContent, setIsOpen, modalKey])

  return (
    <ModalContext.Provider value={{
      content,
      isOpen,
      onPresent: handlePresent,
      onDismiss: handleDismiss,
    }}>
      {children}
      {isOpen && (
        <StyledModalWrapper>
          <StyledModalBackdrop onClick={handleDismiss} />
          {React.isValidElement(content) && React.cloneElement(content, {
            onDismiss: handleDismiss,
          })}
        </StyledModalWrapper>
      )}
    </ModalContext.Provider>
  )
}

const StyledModalWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
`

const StyledModalBackdrop = styled.div`
  background-color: ${props => props.theme.black3}aa;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
`

export default ModalWrapper
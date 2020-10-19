import { useContext, useCallback } from 'react'
import { ModalContext } from '../context'
import { ApplicationModal } from '../constants/ApplicationModal'

const useModal = (modal: React.ReactNode, key?: ApplicationModal) => {
    const { onDismiss, onPresent } = useContext(ModalContext)
    
    const handlePresent = useCallback(() => {
        onPresent(modal, key)
    }, [key, modal, onPresent])
    return [handlePresent, onDismiss]
}

export default useModal
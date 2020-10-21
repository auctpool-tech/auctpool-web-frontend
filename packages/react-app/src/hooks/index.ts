import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

import { useContext, useCallback, useEffect, useRef } from 'react'
import { ModalContext } from '../context'
import { NETWORK_CONTEXT, ApplicationModal, ChainId } from '../constants'

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & { chainId?: ChainId } {
    const context = useWeb3ReactCore<Web3Provider>()
    const contextNetwork = useWeb3ReactCore<Web3Provider>(NETWORK_CONTEXT)
    return context.active ? context : contextNetwork
}

export const useModal = (modal: React.ReactNode, key?: ApplicationModal) => {
    const { onDismiss, onPresent } = useContext(ModalContext)
    
    const handlePresent = useCallback(() => {
        onPresent(modal, key)
    }, [key, modal, onPresent])
    return [handlePresent, onDismiss]
}

export default function usePrevious<T>(value: T) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

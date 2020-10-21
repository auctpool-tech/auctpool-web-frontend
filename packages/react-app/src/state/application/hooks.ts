import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from './actions'
import { ApplicationModal } from '../../constants'
import { AppState, AppDispatch } from '..'

export function useModalOpened(modal: ApplicationModal): boolean {
    const openedModal = useSelector((state: AppState) => state.application.openModal)
    return openedModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
    const opened = useModalOpened(modal)
    const dispatch = useDispatch<AppDispatch>()
    return useCallback(() => dispatch(setOpenModal(opened ? null: modal)), [dispatch, modal, opened])
}

export function useOpenModal(modal: ApplicationModal): () => void {
    const dispatch = useDispatch<AppDispatch>()
    return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal])
}

export function useCloseModals(): () => void {
    const dispatch = useDispatch<AppDispatch>() 
    return useCallback(() => dispatch(setOpenModal(null)), [dispatch])
}
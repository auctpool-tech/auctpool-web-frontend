import { createReducer } from '@reduxjs/toolkit'
import { setNftMintProcess, setOpenModal, NftMintProcess } from './actions'
import { ApplicationModal } from '../../constants'

export interface ApplicationState {
    readonly openModal: ApplicationModal | null
    readonly nftMintProcess: NftMintProcess | null
}

const initialState: ApplicationState = {
    openModal: null,
    nftMintProcess: null
}

export default createReducer(initialState, builder =>
    builder
        .addCase(setOpenModal, (state, action) => {
            state.openModal = action.payload
        })
        .addCase(setNftMintProcess, (state, action) => {
            state.nftMintProcess = action.payload
        })
)
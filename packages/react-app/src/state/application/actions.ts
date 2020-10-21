import { createAction } from '@reduxjs/toolkit'
import { ApplicationModal } from '../../constants'

export enum NftMintProcess {
    Prove,
    Mint,
    Sign
}

export const setNftMintProcess = createAction<NftMintProcess | null>('application/nft')
export const setOpenModal = createAction<ApplicationModal | null>('application/modal')
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

const PERSISTED_KEYS: string[] = []

const store = configureStore({
    reducer: {

    },
    middleware: [...getDefaultMiddleware({thunk: false}), save({ states: PERSISTED_KEYS })],
    preloadedState: load({ states: PERSISTED_KEYS })
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

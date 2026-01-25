import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/userSlice'
import { userApi } from './api/userApi'
import { contentApi } from './api/contentApi'

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [contentApi.reducerPath]: contentApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware, contentApi.middleware),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState, ...}
export type AppDispatch = typeof store.dispatch;
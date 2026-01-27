import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/userSlice'
import contentsReducer from '../redux/features/contentsSlice'
import themeReducer from '../redux/features/themeSlice'
import { userApi } from './api/userApi'
import { contentApi } from './api/contentApi'
export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        contents: contentsReducer,
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
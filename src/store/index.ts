import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from '../Cart'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export default store

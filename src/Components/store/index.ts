import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type rootReducer = ReturnType<typeof store.getState>

export default store

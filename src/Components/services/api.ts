import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ObjectStore } from '../../pages/Home'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<ObjectStore[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurante: builder.query<ObjectStore, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api

export default api

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ObjectStore } from '../pages/Home'

type Product = {
  id: number
  price: number
}
type PurchasePayload = {
  items: Product[]
}

type PurscheResponse = {
  orderId: string
}

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
    }),
    pursche: builder.mutation<PurscheResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api

export default api

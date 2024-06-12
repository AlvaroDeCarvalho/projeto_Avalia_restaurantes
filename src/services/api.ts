import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}
type PurchasePayload = {
  items: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
    payment: {
      card: {
        name: string
        number: string
        code: string
        exprires: {
          month: string
          year: string
        }
      }
    }
  }
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

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  usePurscheMutation
} = api

export default api

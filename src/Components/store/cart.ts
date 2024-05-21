import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ObjectStore } from '../../pages/Home'
type CartItem = {
  items: ObjectStore[]
  isOpen: boolean
}
const initialState: CartItem = {
  items: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ObjectStore>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions

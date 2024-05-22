import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ItemSelection } from '../../containers/ItemList'

export type newItemSelect = Omit<ItemSelection, 'qntServe'>

type CartItem = {
  items: newItemSelect[]
  isOpen: boolean
}

const initialState: CartItem = {
  items: [],
  isOpen: false
}

const cartState = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<newItemSelect>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartState.actions
export default cartState.reducer

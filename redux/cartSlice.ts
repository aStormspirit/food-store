import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
      state.quantity += 1
      state.total += action.payload.price * action.payload.quantity
    },
    addQuantity: (state, action) => {
      state.products = action.payload.newCart
      state.total += action.payload.price * action.payload.quantity
    },
    reset: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    },
  },
})

export const { addProduct, addQuantity, reset } = cartSlice.actions
export default cartSlice.reducer

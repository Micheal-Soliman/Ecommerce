import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import contactSlice from './contactSlice'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
      cart: cartSlice,
      contact: contactSlice,
      product: productSlice,
  },
})
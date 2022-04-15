import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import contactSlice from './contactSlice'
import productSlice from './productSlice'
import sellerSlice from './sellerSlice'
import signinSlice from './signinSlice'

export const store = configureStore({
  reducer: {
      cart: cartSlice,
      contact: contactSlice,
      product: productSlice,
      signin: signinSlice,
      seller: sellerSlice,
  },
})
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
      list:[], 
      numberItems: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.numberItems += 1 
      state.list.push(action.payload)
      for (let i = 0; i < state.list.length; i++) {
        for (let j = i+1; j < state.list.length; j++) {
          if (state.list[i].id == state.list[j].id) {
              state.list.splice(j,1)
              state.list[i].price += state.list[i].price
              state.list[i].count += 1
          }
        }   
      }
    },
    deleteProduct: (state, action) => {
          state.numberItems -= action.payload.count
          state.list = state.list.filter((i)=> i.id != action.payload.id)
      },
  },
})

export const { addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProduct = createAsyncThunk ('product/getProduct',
    async () =>{
        return await fetch('https://fakestoreapi.com/products').then(response => response.json())
    }
)

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    Data: [],
    statue: null
  },
  reducers: {
    buyProduct: (state, action) => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.payload)
      };
      fetch('https://reqres.in/api/purchasedProducts', requestOptions)
          .then(response => response.json())
      }
    },
  extraReducers: {
      [getProduct.pending]: (state, action)=>{
        state.statue = 'Loading...'
      },
      [getProduct.fulfilled]: (state, action)=>{
        state.Data = action.payload
        state.statue = 'Success'
      },
      [getProduct.rejected]: (state, action)=>{
        state.statue = 'Failed'
      },
  },
})

export const { buyProduct } = productSlice.actions
export default productSlice.reducer
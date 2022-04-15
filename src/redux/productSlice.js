import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProduct = createAsyncThunk ('product/getProduct',
    async () =>{
        return await fetch('https://localhost:5001/api/models/GetAllOrderdBySale/9999')
        .then(response => response.json())
    }
)

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    Data: [],
    someData: [],
    somesomeData: [],
    statue: null
  },
  reducers: {},
  extraReducers: {
      [getProduct.pending]: (state, action)=>{
        state.statue = 'Loading...'
      },
      [getProduct.fulfilled]: (state, action)=>{
        state.Data = action.payload
        state.someData = action.payload.slice(0,10)
        state.somesomeData = action.payload.slice(0,4)
        state.statue = 'Success'
      },
      [getProduct.rejected]: (state, action)=>{
        state.statue = 'Failed'
      },
  },
})

export const { buyProduct } = productSlice.actions
export default productSlice.reducer
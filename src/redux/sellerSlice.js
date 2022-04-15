import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getSellerProducts = createAsyncThunk ('product/getSellerProducts',
    async () =>{
        return await fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
    }
)

export const sellerSlice = createSlice({
  name: 'product',
  initialState: {
    Data: [],
    statue: null
  },
  reducers: {
    addSellerOldProducts: (state, action) => {
      console.log(action.payload)
      fetch(`https://localhost:5001/api/products/add/quantity=${action.payload.quantity}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"id":0,"model": action.payload.name, "clientUsername": null, "rate":0})
      }) 
          .then(response => response.json())
          .then(json=>console.log(json))
      },
    addSellerProducts: (state, action) => {
      fetch(`https://localhost:5001/api/models/addWithproducts/quntity=${action.payload.quantity}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"name":action.payload.name,"imagePath": action.payload.imgPath,"price": action.payload.price,"salePrice": action.payload.sale,"brand": action.payload.brand,"color": action.payload.color, "category":action.payload.category, "vendorUsername": action.payload.sellerName,"features": action.payload.features})
      }) 
          .then(response => response.json())
          .then(json=>console.log(json))
      }
  },
  extraReducers: {
      [getSellerProducts.pending]: (state, action)=>{
        state.statue = 'Loading...'
      },
      [getSellerProducts.fulfilled]: (state, action)=>{
        state.Data = action.payload
        state.statue = 'Success'
      },
      [getSellerProducts.rejected]: (state, action)=>{
        state.statue = 'Failed'
      },
  },
})

export const { addSellerProducts, addSellerOldProducts } = sellerSlice.actions

export default sellerSlice.reducer
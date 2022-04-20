import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
      list:[], 
      numberItems: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload)
      state.numberItems += 1 
      for (let i = 0; i < state.list.length; i++) {
        for (let j = i+1; j < state.list.length; j++) {
          if (state.list[i].model == state.list[j].model) {
              state.list.splice(j,1)
              state.list[i].count += 1
          }
        }   
      }
    },
    buyProduct: (state, action) => {
          console.log(action.payload.Username)
          fetch(`https://localhost:5001/api/carts/checkout/${action.payload}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function(response) {
            return response.text().then(function(text) {
              console.log(text)
           });
         });
         state.list = []
         state.numberItems = 0
      },
    deleteProduct: (state, action) => {
        fetch(`https://localhost:5001/api/carts/RemoveFromCart/${action.payload.user}/${action.payload.model}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(json=>console.log(json))
        state.numberItems -= 1
        state.list.filter((i)=>{
          if (action.payload.model == i.model) {
              i.count -= 1
              if (i.count == 0) {
                state.list = state.list.filter((i)=> i.model != action.payload.model)
              }
          }
        })
      },
    getLength: (state, action)=>{
      state.numberItems = action.payload 
    },  
    getCart: (state, action) => {
      state.numberItems += 1 
      state.list.push(action.payload)
      for (let i = 0; i < state.list.length; i++) {
        for (let j = i+1; j < state.list.length; j++) {
          if (state.list[i].model == state.list[j].model) {
              state.list.splice(j,1)
              state.list[i].count += 1
          }
        }   
      }
    },
  },
})

export const { addProduct, buyProduct,deleteProduct,getCart, getLength } = cartSlice.actions

export default cartSlice.reducer
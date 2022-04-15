import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
      list:[], 
      actualList:[],
      numberItems: null,
      num:0
  },
  reducers: {
    addProduct: (state, action) => {
        // fetch(`https://localhost:5001/api/carts/add/${action.payload.nameUser}/${action.payload.nameModel}`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   }) 
        //   .then( function(response) {
        //     return  response.text().then(function(text) {
        //      console.log(text)
        //    });
        //  });
        state.numberItems += 1 
        // console.log(state.numberItems);
      // state.list.push(action.payload)
      // for (let i = 0; i < state.list.length; i++) {
      //   for (let j = i+1; j < state.list.length; j++) {
      //     if (state.list[i].id == state.list[j].id) {
      //         state.list.splice(j,1)
      //         state.list[i].count += 1
      //     }
      //   }   
      // }
    },
    // buyProduct: (state, action) => {
    //     for (let i = 0; i < action.payload.count; i++) {
    //       fetch(`https://localhost:5001/api/carts/checkout/${action.payload.clientUsername}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({id: i.id, model: i.model, clientUsername:i.clientUsername, rate: i.rate})
    //       })
    //       .then(async function(response) {
    //         return await response.text().then(function(text) {
    //           console.log(text)
    //        });
    //      });
    //       // state.numberItems -= 1
    //       state.list = state.list.filter((i)=> i.id != action.payload.id)
    //     }
    //   },
    deleteProduct: (state, action) => {
      console.log(action.payload)
        fetch(`https://localhost:5001/api/carts/RemoveFromCart/${action.payload.user}/${action.payload.model}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(json=>console.log(json))
          state.list.filter((i)=>{
            if (action.payload.model == i.model) {
                i.count -= 1
            }
          })
          // // state.list = state.list.filter((i)=> i.id != action.payload.id)
      },
    // getLength: (state, action)=>{
    //   state.numberItems = action.payload 
    // },  
    getCart: (state, action) => {
      // state.numberItems += 1 
      state.list.push(action.payload)
      state.actualList.push(action.payload)
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
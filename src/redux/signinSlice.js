import { createSlice } from '@reduxjs/toolkit'

export const signinSlice = createSlice({
  name: 'contact',
  initialState:{
    result: ''
  },
  reducers: {
    enterUser: async (state, action) => {
        return await fetch(`https://localhost:5001/api/clients/SignUp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload)
      }) 
          .then(response => response.json())
          .then(json=>console.log(json))
      },
    enterVendor: async (state, action) => {
        console.log(action.payload)
        return await fetch(`https://localhost:5001/api/Vendors/SignUp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload)
      }) 
        .then(function(response) {
          return  response.text().then(function(text) {
          console.log(text)
        });
      });
      },
    // checkUser: async (state, action) => {
    //     return await fetch(`https://localhost:5001/api/clients/signin/${action.payload.Username}/${action.payload.Pass}`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //   }) 
    //     .then(async function(response) {
    //       return await response.text().then(function(text) {
    //         state.result = text
    //       });
    //     });
    //   },
    },
  },
)

export const { enterUser, enterVendor } = signinSlice.actions

export default signinSlice.reducer
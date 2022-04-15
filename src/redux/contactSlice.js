import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState:{
  },
  reducers: {
    addRequest: (state, action) => {
      fetch('https://reqres.in/api/requestClient', {
        method: 'POST',
        body: JSON.stringify(action.payload)
      }) 
          .then(response => response.json())
          .then(json=>console.log(json))
      }
    },
  },
)

export const { addRequest } = contactSlice.actions

export default contactSlice.reducer
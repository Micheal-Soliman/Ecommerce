import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState:{
  },
  reducers: {
    addRequest: (state, action) => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.payload)
      };
      fetch('https://reqres.in/api/requestClient', requestOptions)
          .then(response => response.json())
      }
    },
  },
)

export const { addRequest } = contactSlice.actions

export default contactSlice.reducer
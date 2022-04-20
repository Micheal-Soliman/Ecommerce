import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState:{
  },
  reducers: {
    addRequest: (state, action) => {
      fetch(`https://localhost:5001/api/shared/ContactUs/${action.payload.Name}/${action.payload.Email}/${action.payload.Report}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }) 
      .then(function(response) {
          return response.text().then(function(text) {
            console.log(text)
        });
       });
      }
    },
  },
)

export const { addRequest } = contactSlice.actions

export default contactSlice.reducer
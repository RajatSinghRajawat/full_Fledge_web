// import { createSlice } from "@reduxjs/toolkit";
// import { getCarts } from "../actions/productActions";



// const initialState = {
//   value: [],
//   loading: false,
//   error: null,
//   addUser: false
// }


// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getCarts.fulfilled, (state, action) => {
//       // console.log(action,"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
//       state.loading = false;
//       state.value = action.payload;
//       state.addUser = false

//     })
//     builder.addCase(getCarts.pending, (state, action) => {
//       state.loading = true;
//       state.error = null
//     })
//     builder.addCase(getCarts.rejected, (state, action) => {
//       console.log("********************************************************");
//       state.loading = false;
//       state.error = action.message.error;


//     })
//   }

// })

// export default cartSlice.reducer;



// src/redux/reducers/productReducer.js

import { createSlice } from '@reduxjs/toolkit';
import { FETCH_PRODUCT_ERROR, FETCH_PRODUCT_SUCCESS,  getCarts } from '../actions/productActions';
import { cartProducts } from '../Store/productAtom';


export const productReducer = (state = cartProducts, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: action.payload, // Maps the API response to productData
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload, // Maps the error message
      };
    default:
      return state;
  }
};


const initialState = {
  value:[],
  loading:false,
  error:null,
  addUser:false
}


export const cartSlice = createSlice({
  name:'user1',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getCarts.fulfilled,(state,action)=>{
      console.log(action,"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      state.loading = false;
      state.value = action.payload;
      state.addUser = false

    })
    builder.addCase(getCarts.pending,(state,action)=>{
      state.loading = true;
      state.error = null
    })
    builder.addCase(getCarts.rejected,(state,action)=>{
      console.log("********************************************************in recject",state.error);
      state.loading = false;
      state.error = action.message.error;
      

    })
  }

})



export default cartSlice.reducer

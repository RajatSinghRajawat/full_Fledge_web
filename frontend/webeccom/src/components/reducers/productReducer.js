// src/redux/reducers/productReducer.js

import { createSlice } from '@reduxjs/toolkit';
import { FETCH_PRODUCT_ERROR, FETCH_PRODUCT_SUCCESS, getProduct } from '../actions/productActions';
import { initialProductState  } from '../Store/productAtom';


export const productReducer = (state = initialProductState, action) => {
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


export const productSlice = createSlice({
  name:'user',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getProduct.fulfilled,(state,action)=>{
      // console.log(action,"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
      state.loading = false;
      state.value = action.payload;
      state.addUser = false

    })
    builder.addCase(getProduct.pending,(state,action)=>{
      state.loading = true;
      state.error = null

    })
    builder.addCase(getProduct.rejected,(state,action)=>{
      console.log("********************************************************");
      state.loading = false;
      state.error = action.message.error;
      

    })
  }

})

export default productSlice.reducer

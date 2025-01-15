import { configureStore } from '@reduxjs/toolkit'
import productSlice  from '../reducers/productReducer'
// import { cartSlice } from '../reducers/CartReducer'
import  cartSlice  from '../reducers/CartReducer'


export const store = configureStore({
  reducer: {
    // product:productReducer,
    MYproduct:productSlice,
    Mycart:cartSlice
    
  },
})
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { addCart, getCart } from "../Apis.js/Cart";
import { removeCart } from "../Apis.js/Cart";
// src/redux/actions/productActions.js
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

// export const fetchProduct = (productName) => {
//   return async (dispatch) => {
//     try {
//       const requestOptions = {
//         method: "GET",
//         redirect: "follow",
//       };

//       const response = await fetch(`http://localhost:5000/getProduct?productName=${productName}`, requestOptions);
//       const result = await response.json();

//       dispatch({
//         type: FETCH_PRODUCT_SUCCESS,
//         payload: result, 
//       });
//     } catch (error) {
//       // Dispatch error
//       dispatch({
//         type: FETCH_PRODUCT_ERROR,
//         payload: error.message,
//       });
//     }
//   };
// };


export const getProduct = createAsyncThunk(
  'getProduct',
  async (data, { rejectWithValue }) => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(`http://localhost:5000/getProduct?keyword=${data}`, requestOptions);
      const result = await response.json();
      console.log('result ooooooooooooooooooooo', result)
      return result

    } catch (error) {
      return rejectWithValue(error)

    }
  })


export const getCarts = createAsyncThunk(
  'getCarts',
  async (data, { rejectWithValue }) => {
    try {
      // getCart(data)
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      const responce = await fetch("http://localhost:5000/getcart?userId=67441031faea89f5e1d847f2", requestOptions)
      const result = await responce.json();
      console.log("get cart **********************8", result, "i am ")
      return result;

    } catch (error) {
      console.log(error, "i am erro")
      return rejectWithValue(error)

    }
  }
)

export const addCarts = createAsyncThunk(
  'addCart',
  async (data, { rejectWithValue }) => {
    try {
      addCart(data)

    } catch (error) {
      return rejectWithValue(error)

    }
  }

)

export const removeCarts = createAsyncThunk(
  'addCart',
  async (data, { rejectWithValue }) => {
    try {
      removeCart(data)


    } catch (error) {
      return rejectWithValue(error)

    }
  }

)
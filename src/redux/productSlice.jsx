// src/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { products } from './Products'; 

const productSlice = createSlice({
  name: 'products',
  initialState: {
    category: products.category,
  },
  reducers: {},
});

export default productSlice.reducer;

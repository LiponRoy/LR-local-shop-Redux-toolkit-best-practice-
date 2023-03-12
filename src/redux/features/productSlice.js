import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;

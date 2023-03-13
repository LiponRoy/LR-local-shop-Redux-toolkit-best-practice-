import { createSlice } from '@reduxjs/toolkit';
import { ProductsData } from '../../Data';

const initialState = {
	filteredProducts: [],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		filterData(state, action) {
			try {
				const myFinterData = ProductsData.filter((data) => data.type === action.payload);
				state.filteredProducts = myFinterData;
			} catch (error) {
				return error;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { filterData } = productSlice.actions;

export default productSlice.reducer;

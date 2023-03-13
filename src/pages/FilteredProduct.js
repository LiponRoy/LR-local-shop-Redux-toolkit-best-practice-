import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import filterData from '../redux/features/productSlice';

const FilteredProduct = () => {
	const dispatch = useDispatch();
	const { type } = useParams();

	useEffect(() => {
		dispatch(filterData(type));
	}, []);

	return <div>{type}</div>;
};

export default FilteredProduct;

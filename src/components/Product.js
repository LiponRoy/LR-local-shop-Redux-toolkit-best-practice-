import React from 'react';

const Product = ({ title, price }) => {
	return (
		<>
			<div className=''>
				<span>{title}</span>
				<span>{price}</span>
			</div>
		</>
	);
};

export default Product;

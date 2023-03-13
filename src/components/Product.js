import React from 'react';

const Product = ({ img, title, price }) => {
	return (
		<>
			<div className=''>
				<img src={img} alt='noImg' width={120} />
				<span>{title}</span>
				<span>{price}</span>
			</div>
		</>
	);
};

export default Product;

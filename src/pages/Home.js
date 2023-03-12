import React from 'react';
import Product from '../components/Product';
import { Products } from '../Data';

const Home = () => {
	return (
		<div>
			{Products.map((val) => (
				<div key={val.id} className=' flex flex-col items-start justify-start m-5 bg-lime-600 text-white p-5'>
					<Product title={val.title} price={val.price}></Product>
				</div>
			))}
		</div>
	);
};

export default Home;

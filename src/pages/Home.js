import React from 'react';
import CategoryButton from '../components/CategoryButton';
import Hero from '../components/Hero';
import Product from '../components/Product';
import { Products } from '../Data';

const Home = () => {
	return (
		<>
			<Hero></Hero>
			<CategoryButton></CategoryButton>
		</>
	);
};

export default Home;

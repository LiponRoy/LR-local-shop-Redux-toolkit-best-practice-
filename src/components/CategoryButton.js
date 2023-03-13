import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryButton = () => {
	const navigate = useNavigate();

	const [flag, setFlag] = useState(false);
	const clickME = (dat) => {
		if (dat === 'SIX') {
			setFlag(true);
			return;
		}
		console.log(dat);
	};
	const buttonsName = ['men', 'women'];
	return (
		<div>
			{flag ? (
				<span>Who the hell are you</span>
			) : (
				<div className={outerTag}>
					{buttonsName.map((buttonName, i) => (
						<a
							key={i}
							onClick={() => {
								navigate(`/filteredProduct/${buttonName}`);
							}}
							className={aTag}>
							{buttonName}
						</a>
					))}
				</div>
			)}
		</div>
	);
};
const aTag = ' w-[200px] h-[150px] flex items-center justify-center bg-amber-500 m-2 rounded-lg cursor-pointer';
const outerTag = 'h-screen w-full flex items-start justify-center mt-10 text-white text-2xl';

export default CategoryButton;

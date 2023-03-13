import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilteredProduct from './pages/FilteredProduct';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/filteredProduct/:type' element={<FilteredProduct />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

import './index.css';
import Header from './Header';
import FuelCalc from './FuelCalc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Calculator />} />
				<Route path='/fuelcalculator' element={<FuelCalc />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

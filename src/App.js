import './Index.css';
import Calculator from './Calculator';
import FuelCalc from './FuelCalc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter >
			<Routes >
				<Route path='/' element={<Calculator />} />
				<Route path='/fuelcalculator' element={<FuelCalc />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

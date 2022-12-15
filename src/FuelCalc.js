import React, { useState } from 'react';
import AverageConsumption from './AverageConsumption';

const FuelCalc = () => {
	const [currentField, setCurrentField] = useState();
	const [state, setState] = useState({
		price: '',
		routeLength: '',
		consumption: '',
		extraCost: '',
		total: 0,
	});
	const calculateCost = () => {
		return (state.routeLength / 100) * state.consumption * state.price;
	};

	const calculateTotal = e => {
		e.preventDefault();
		const sum = calculateCost() + Math.round(state.extraCost);
		setState({ ...state, total: sum });
	};
	console.log(state.total);
	const priceChange = e => {
		setState({ ...state, price: e.target.value });
	};

	const routeLengthChange = e => {
		setState({ ...state, routeLength: e.target.value });
	};

	const consumptionChange = e => {
		setState({ ...state, consumption: e.target.value });
	};

	const extraCostChange = e => {
		setState({ ...state, extraCost: e.target.value });
	};

	function InputField(props) {
		const isCurrentField = props.name === currentField;

		return (
			<>
				<label className=' mr-5'>{props.nameLabel}</label>
				<input
					autoFocus={isCurrentField}
					onFocus={() => setCurrentField(props.name)}
					name={props.name}
					value={props.value}
					onChange={props.onChange}
					placeholder={props.placeholder}
					type='number'
					className='flex mr-2 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				/>
			</>
		);
	}
	return (
		<div>
			<div className='flex flex-col md:flex-row items-center text-3xl min-h-screen p-4 w-screen justify-center bg-gradient-to-tr from-yellow-600 via-fuchsia-400 to-purple-900'>
				<div>
					<h1 className=' flex-01 pt-40 mb-10 mr-60 text-4xl r font-bold '>Fuel Cost Calculator</h1>
					<form name='form' onSubmit={calculateTotal}>
						<InputField
							placeholder='per liter'
							value={state.price}
							name='price'
							nameLabel='Fuel Price:'
							onChange={priceChange}
						/>
						<InputField
							placeholder='in km'
							value={state.routeLength}
							name='routeLength'
							nameLabel='Route length:'
							onChange={routeLengthChange}
						/>
						<InputField
							placeholder='liter / 100km'
							value={state.consumption}
							name='consumption'
							nameLabel='Fuel consumption:'
							onChange={consumptionChange}
						/>
						<InputField
							placeholder='how much you add?'
							value={state.extraCost}
							name='extraCost'
							nameLabel='Extra Cost:'
							onChange={extraCostChange}
						/>
						<button
							disabled={state.price === '' || state.routeLength === '' || state.consumption === ''}
							type='submit'
							className='p-3 mt-6 bg-black rounded-lg text-white disabled:opacity-40'
							onClick={calculateTotal}>
							Calculate
						</button>
						{state.total !== 0 && <p className='mt-4'>Cost of the trip {state.total} zł</p>}
					</form>
				</div>
				<AverageConsumption />
			</div>
		</div>
	);
};

export default FuelCalc;

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
				<div class='relative z-0 mb-6 w-full group'>
					<input
						type='number'
						class='block py-2.5 px-0 w-48 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-gray-600 peer'
						placeholder=' '
						autoFocus={isCurrentField}
						onFocus={() => setCurrentField(props.name)}
						name={props.name}
						value={props.value}
						onChange={props.onChange}
						required
					/>
					<div class='absolute left-44 top-2 mr-2 text-sm whitespace-nowrap'>{props.unit}</div>
					<label
						for='floating_text_price'
						class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						{props.nameLabel}
					</label>
				</div>
			</>
		);
	}
	return (
		<div>
			<div className='flex flex-col md:flex-row items-center text-2xl min-h-screen p-4 w-auto justify-center bg-calculator-fuel'>
				<div className='bg-white bg-opacity-90 mb-20 mt-20 mr-0 md:mr-60 p-4 rounded-lg'>
					<h1 className=' flex-01  mb-10 sm:pt-20 text-sm mr-28 font-bold sm:text-base md:text-lg lg:text-xl  xl:text-2xl 2xl:text-3xl'>
						Fuel Cost Calculator
					</h1>
					<form name='form' onSubmit={calculateTotal}>
						<InputField
							value={state.price}
							name='price'
							nameLabel='Fuel Price:'
							onChange={priceChange}
							unit='Zł/per liter'
						/>
						<InputField
							value={state.routeLength}
							name='routeLength'
							nameLabel='Route length:'
							onChange={routeLengthChange}
							unit='KM'
						/>
						<InputField
							value={state.consumption}
							name='consumption'
							nameLabel='Fuel consumption:'
							onChange={consumptionChange}
							unit='l/100km'
						/>
						<InputField
							value={state.extraCost}
							name='extraCost'
							nameLabel='Extra Cost:'
							onChange={extraCostChange}
							unit='Zł (optional)'
						/>
						<button
							disabled={state.price === '' || state.routeLength === '' || state.consumption === ''}
							type='submit'
							className='p-2 mt-6 bg-black rounded-lg text-white disabled:opacity-40'
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

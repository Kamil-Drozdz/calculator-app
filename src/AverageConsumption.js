import { useState } from 'react';

function AverageConsumption() {
	const [state, setState] = useState({
		fuelCost: '',
		kilometersTraveled: '',
		consumptionFuel: '',
		consumptionCost: 0,
		calculateConsumption: 0,
	});

	//mały komentarz currentState  w którym obie funkcje będą miały dostęp do aktualnego stanu obiektu state, a następnie obie funkcje będą wywoływane w tej samej kolejności, ale w tym samym setState. gdyż wywoływane obie w jednej funkcji nadpisywały stan
	function calculateConsumptionFuel() {
		const currentState = { ...state };
		console.log('fuelCostChange', state.fuelCost);
		const calculateCostFuelValue = ((currentState.kilometersTraveled / 100) * currentState.consumptionFuel).toFixed(2);

		setState(currentState => ({
			...currentState,
			calculateConsumption: calculateCostFuelValue,
		}));
	}

	function fuelCostTotal() {
		const consumptionCostValue = (state.consumptionFuel * state.fuelCost).toFixed(2);
		setState({
			...state,
			consumptionCost: consumptionCostValue,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		fuelCostTotal();
		calculateConsumptionFuel();
	}

	const fuelCostChange = e => {
		setState(prevState => ({ ...prevState, fuelCost: e.target.value }));
	};

	const kilometersTraveledChange = e => {
		setState(prevState => ({ ...prevState, kilometersTraveled: e.target.value }));
	};

	const consumptionFuelChange = e => {
		setState(prevState => ({ ...prevState, consumptionFuel: e.target.value }));
	};
	return (
		<>
			<div>
				<div>
					<h1 className=' flex-01 pt-40 mb-10 mr-60 text-4xl r font-bold '>Average consumption </h1>
					<form name='form'>
						<label> Fuel Cost:</label>
						<input
							type='number'
							placeholder='per liter'
							value={state.fuelCost}
							onChange={fuelCostChange}
							className='flex mr-2  text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						/>
						<label>Kilometers traveled:</label>
						<input
							placeholder='in km'
							value={state.kilometersTraveled}
							name='kilometersTraveled'
							nameLabel='Kilometers traveled:'
							onChange={kilometersTraveledChange}
							className='flex mr-2  text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						/>
						<label>Fuel consumption:</label>
						<input
							placeholder='liter / 100km'
							value={state.consumptionFuel}
							onChange={consumptionFuelChange}
							className='flex mr-2  text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						/>
						<button
							disabled={state.fuelCost === '' || state.kilometersTraveled === '' || state.consumptionFuel === ''}
							type='submit'
							className='p-3 mt-6 bg-black rounded-lg text-white disabled:opacity-40'
							onClick={handleSubmit}>
							Calculate
						</button>
						{state.calculateConsumption !== 0 && (
							<p className='mt-4'>Your car will consumption {state.calculateConsumption} Liters</p>
						)}
						{state.consumptionCost !== 0 && <p className='mt-4'>Fuel cost: {state.consumptionCost} zł</p>}
					</form>
				</div>
			</div>
		</>
	);
}

export default AverageConsumption;

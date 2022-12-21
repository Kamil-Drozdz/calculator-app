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
			<div className='bg-white bg-opacity-90  p-4 rounded-lg sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16'>
				<div>
					<h1 className=' flex-01  mb-10  text-sm mr-24 lg:mr-8 font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
						Average consumption fuel
					</h1>
					<form name='form'>
						<div className='relative z-0 mb-6 w-full group'>
							<input
								type='number'
								className='block py-2.5 px-0 w-48 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-gray-600 peer '
								placeholder=' '
								value={state.fuelCost}
								onChange={fuelCostChange}
								required
							/>
							<div class='absolute left-44 top-2 mr-2 text-sm whitespace-nowrap'>zł/per liter</div>
							<label
								for='floating_text_price'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
								Fuel Cost:
							</label>
						</div>
						<div className='relative z-0 mb-6 w-full group'>
							<input
								type='number'
								className='block py-2.5 px-0 w-48 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-gray-600 peer '
								placeholder=' '
								value={state.kilometersTraveled}
								onChange={kilometersTraveledChange}
								required
							/>
							<div className='absolute left-44 top-2 mr-2 text-sm'>KM</div>
							<label
								for='floating_text_price'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
								Kilometers traveled:
							</label>
						</div>
						<div class='relative z-0 mb-6 w-full group'>
							<input
								type='number'
								className='block py-2.5 px-0 w-48 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-gray-600 peer '
								placeholder=' '
								value={state.consumptionFuel}
								onChange={consumptionFuelChange}
								required
							/>
							<div className='absolute left-44 top-2 mr-2 text-sm'>l/100KM</div>
							<label
								for='floating_text_price'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
								Fuel consumption:
							</label>
						</div>
						<button
							disabled={state.fuelCost === '' || state.kilometersTraveled === '' || state.consumptionFuel === ''}
							type='submit'
							className='p-2 mt-6 bg-black rounded-lg text-white disabled:opacity-40'
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

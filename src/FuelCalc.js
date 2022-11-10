import React, { Component } from 'react';

class FuelCalc extends Component {
	constructor(props) {
		super(props);
		this.state = { price: 0, routeLength: 0, consumption: 0, extraCost: 0 };
		this.priceChange = this.priceChange.bind(this);
		this.routeLengthChange = this.routeLengthChange.bind(this);
		this.consumptionChange = this.consumptionChange.bind(this);
		this.extraCostChange = this.extraCostChange.bind(this);

		this.calculateCostMultiplyChange = this.state = { fuelCost: 0, kilometersTraveled: 0, consumptionFuel: 0 };
		this.fuelCostChange = this.fuelCostChange.bind(this);
		this.kilometersTraveledChange = this.kilometersTraveledChange.bind(this);
		this.consumptionFuelChange = this.consumptionFuelChange.bind(this);
	}

	calculateCost() {
		return ((this.state.routeLength / 100) * this.state.consumption * this.state.price).toFixed(2);
	}

	priceChange(e) {
		this.setState({ price: e.target.value });
	}

	routeLengthChange(e) {
		this.setState({ routeLength: e.target.value });
	}

	consumptionChange(e) {
		this.setState({ consumption: e.target.value });
	}
	extraCostChange(e) {
		this.setState({ extraCost: e.target.value });
	}

	calculateConsumptionCost() {
		return ((this.state.kilometersTraveled / 100) * this.state.consumptionFuel).toFixed(2);
	}
	consumptionCost() {
		return (this.state.consumptionFuel * this.state.fuelCost).toFixed(2);
	}

	fuelCostChange(e) {
		this.setState({ fuelCost: e.target.value });
	}

	kilometersTraveledChange(e) {
		this.setState({ kilometersTraveled: e.target.value });
	}

	consumptionFuelChange(e) {
		this.setState({ consumptionFuel: e.target.value });
	}

	render() {
		return (
			<>
				<div className='flex text-3xl h-screen justify-center bg-gradient-to-tr from-yellow-600 via-fuchsia-400 to-purple-900'>
					<div>
						<h1 className=' flex-01 pt-40 mb-10 mr-60 text-4xl r font-bold '>Fuel Cost Calculator</h1>
						<FuelConsumption consumption={this.state.consumption} callback={this.consumptionChange} />
						<FuelPrice price={this.state.price} callback={this.priceChange} />
						<RouteLength routeLength={this.state.routeLength} callback={this.routeLengthChange} />
						<ExtraCost extraCost={this.state.extraCost} callback={this.extraCostChange} />
						<TotalCost calculateCost={this.calculateCost()} />
					</div>
					<div>
						<h1 className='flex-02 pt-40 mb-10 text-4xl font-bold '>Average fuel consumption Calculator:</h1>
						<FuelCost fuelCost={this.state.fuelCost} callback={this.fuelCostChange} />
						<KilometersTraveled
							kilometersTraveled={this.state.kilometersTraveled}
							callback={this.kilometersTraveledChange}
						/>
						<ConsumptionFuel consumptionFuel={this.state.consumptionFuel} callback={this.consumptionFuelChange} />
						<TotalFuelConsumption cost={this.calculateConsumptionCost()} />
						<ConsumptionCost cost={this.consumptionCost()} />
					</div>
				</div>
			</>
		);
	}
}

class FuelPrice extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className=' mr-5'>Fuel price:</label>
				<input
					className='flex mr-2 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='per liter'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}

class RouteLength extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className='mr-5'>Route length:</label>
				<input
					className='flex ml-2 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='in km'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}

class FuelConsumption extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className='mr-5'>Fuel consumption:</label>
				<input
					className='flex mr-28 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='liter / 100km'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}
class ExtraCost extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className='mr-5'>Extra cost:</label>
				<input
					className='flex mr-28 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='how much you add?'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}

class TotalCost extends Component {
	render() {
		return (
			<div>
				<p className='pt-10 mt-4'>This would cost you:</p>
				<p>{this.props.calculateCost} zł</p>
			</div>
		);
	}
}
// Average fuel consumption

class FuelCost extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className='mr-5'>Fuel cost :</label>
				<input
					className='flex ml-2 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='in km'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}
class KilometersTraveled extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className='mr-5'>Route length:</label>
				<input
					className='flex ml-2 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='in km'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}
class ConsumptionFuel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<label className='mr-5'>Consumption Fuel:</label>
				<input
					className='flex ml-2 pl-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					type='number'
					placeholder='in km'
					onChange={this.props.callback}></input>
			</div>
		);
	}
}
class TotalFuelConsumption extends Component {
	render() {
		return (
			<div>
				<p className='pt-10 mt-24'>This would cost you:</p>
				<p>{this.props.cost} Liters</p>
			</div>
		);
	}
}
class ConsumptionCost extends Component {
	render() {
		return (
			<div>
				<p></p>
				<p>{this.props.cost} zł</p>
			</div>
		);
	}
}

export default FuelCalc;

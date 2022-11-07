import React, { Component } from 'react';
class FuelCalc extends Component {
	constructor(props) {
		super(props);
		this.state = { price: 0, routeLength: 0, consumption: 0, extraCost: 0 };
		this.priceChange = this.priceChange.bind(this);
		this.routeLengthChange = this.routeLengthChange.bind(this);
		this.consumptionChange = this.consumptionChange.bind(this);
		this.extraCostChange = this.extraCostChange.bind(this);
	}

	calculateCost() {
		return (this.state.routeLength / 100) * this.state.consumption * this.state.price;
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

	render() {
		return (
			<div className=' place-items-center text-center text-align: center; text-3xl h-screen bg-gradient-to-tr from-yellow-600 via-fuchsia-400 to-purple-900'>
				<h1 className='pt-40 mb-10 text-4xl text-center font-bold '>Fuel Cost Calculator</h1>
				<FuelConsumption consumption={this.state.consumption} callback={this.consumptionChange} />
				<FuelPrice price={this.state.price} callback={this.priceChange} />
				<RouteLength routeLength={this.state.routeLength} callback={this.routeLengthChange} />
				<ExtraCost extraCost={this.state.extraCost} callback={this.extraCostChange} />
				<TotalCost cost={this.calculateCost()} />
			</div>
		);
	}
}

class FuelPrice extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='text-center'>
				<label className=' mr-5'>Fuel price</label>
				<input
					className='text-center  mr-2 pl-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
			<div className='text-center'>
				<label className='mr-5'>Route length</label>
				<input
					className=' text-center ml-2 pl-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
			<div className='text-center'>
				<label className='mr-5'>Fuel consumption</label>
				<input
					className=' text-center mr-28 pl-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
			<div className='text-center'>
				<label className='mr-5'>Extra cost</label>
				<input
					className=' text-center mr-28 pl-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
				<p className='pt-10'>This would cost you:</p>
				<p>{this.props.cost} zł</p>
			</div>
		);
	}
}

export default FuelCalc;

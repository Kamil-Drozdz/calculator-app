import { useState, useRef } from 'react';

function Calculator() {
	const inputRef = useRef(null);
	const resultRef = useRef(null);
	const [result, setResult] = useState(0);

	function plus(e) {
		e.preventDefault();
		setResult(result => result + Number(inputRef.current.value));
	}

	function minus(e) {
		e.preventDefault();
		setResult(result => result - Number(inputRef.current.value));
	}

	function times(e) {
		e.preventDefault();
		setResult(result => result * Number(inputRef.current.value));
	}

	function divide(e) {
		e.preventDefault();
		setResult(result => result / Number(inputRef.current.value));
	}

	function resetInput(e) {
		e.preventDefault();
		inputRef.current.value = 0;
	}

	function resetResult(e) {
		e.preventDefault();
		setResult(0);
	}

	function Button({ text, reference }) {
		return (
			<>
				<button
					className=' p-0.5 mb-2 mr-2  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
					onClick={reference}>
					<p className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
						{text}
					</p>
				</button>
			</>
		);
	}

	return (
		<>
			<div className='place-items-center w-full flex flex-col content-center h-[94vh] bg-calculator'>
				<div>
					<h1 className='pt-40 mb-10 text-4xl text-center font-bold '> Calculator</h1>
				</div>
				<form class='grid grid-cols-1  gap-4 justify-items-center bg-black bg-opacity-80  p-4 rounded-lg'>
					<p class='text-center min-w-12 p-2 bg-gray-400 rounded-lg text-sm font-bold mb-10' ref={resultRef}>
						{result}
					</p>

					<input
						class='text-center mr-5 flex-row bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-auto p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						pattern='[0-9]'
						ref={inputRef}
						type='number'
						placeholder='Type a number'
					/>
					<div class='grid grid-cols-2 gap-4 justify-items-center'>
						<Button reference={plus} text={'Plus'} />
						<Button reference={minus} text={'Minus'} />
						<Button reference={times} text={'Multiply'} />

						<Button reference={divide} text={'Divide'} />
						<Button reference={resetInput} text={'Reset input'} />
						<Button reference={resetResult} text={'Reset result'} />
					</div>
				</form>
			</div>
		</>
	);
}

export default Calculator;

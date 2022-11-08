function Header() {
	return (
		<nav className='p-6 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
			<div>
				<ul class='flex mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
					<li>
						<a
							href='/'
							class='block text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent'>
							Calculator
						</a>
					</li>
					<li>
						<a
							href='/fuelcalculator'
							class='block text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent'>
							FuelCalculator
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavItem({ to, children }) {
	const location = useLocation();
	const active = location.pathname === to;

	return (
		<Link to={to} className={`p-2 rounded-lg text-white ${active ? 'active' : ''}`}>
			{children}
		</Link>
	);
}

function Header() {
	return (
		<>
			<nav className='p-2 bg-gray-50  border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
				<div>
					<ul className='flex mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
						<NavItem to='/'>Calculator</NavItem>
						<NavItem to='/fuelcalculator'>FuelCalculator</NavItem>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Header;

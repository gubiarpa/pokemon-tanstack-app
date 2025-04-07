import { Route, Routes } from 'react-router-dom';
import { MainNavbar } from '../components/MainNavbar';
import { HomePage } from '../pages';

export const DashboardRouter = () => {
	return (
		<>
			<MainNavbar />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
				</Routes>
			</div>
		</>
	);
};

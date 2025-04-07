import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/*'
					element={<DashboardRouter />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

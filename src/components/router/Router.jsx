import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Main from './../main/Main';
import AboutSmart from './../aboutSmart/AboutSmart';
import Gifts from './../gifts/Gifts';
import Bonus from './../bonus/Bonus';
import School from './../school/School';
import Vacancy from './../vacancy/Vacancy';
import Location from './../location/Location';



const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				index
				element={<Main />}
				errorElement={<Main />}
			/>
			<Route
				path="/about"
				element={<AboutSmart />}
			/>
			<Route
				path="/gifts"
				element={<Gifts />}
			/>
			<Route
				path="/bonus"
				element={<Bonus />}
			/>
			<Route
				path="/school"
				element={<School />}
			/>
			<Route
				path="/vacancy"
				element={<Vacancy />}
			/>
			<Route
				path="/location"
				element={<Location />}
			/>
		</>
	)
)

export default router;
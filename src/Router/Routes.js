import React from "react";
import Increment from "../Views/Increment";
import Temperature from "../Views/Temperature";
import Crud from "../Views/Crud";
import { Route } from "react-router-dom";

const routes = [
	{
		path: "/increment",
		component: Increment
	},
	{
		path: "/temperature",
		component: Temperature
	},
	{
		path: "/crud",
		component: Crud
	}
];

export const RouteWithSubRoutes = (route) => {
	return <Route
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
};

export default routes;
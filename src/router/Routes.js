import React from "react";
import Increment from "../containers/Increment";
import Temperature from "../containers/Temperature";
import Crud from "../containers/Crud";
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
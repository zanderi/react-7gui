import React from 'react';
import styles from './Styles/App.module.scss';
import './Styles/Global.scss';

import  {
	BrowserRouter as Router,
	Switch
} from "react-router-dom"
import Navigation from "./Components/Navigation"
import routes from "./Router/Routes"
import { RouteWithSubRoutes } from "./Router/Routes"

function App() {
	return (
		<div className={styles.app}>
			<Router>
				<Navigation />
				<Switch>
					{
						routes.map((route,i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))
					}
				</Switch>
			</Router>
		</div>
	);
}

export default App;

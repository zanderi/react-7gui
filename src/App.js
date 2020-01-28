import React from 'react';
import styles from './styles/App.module.scss';
import './styles/Global.scss';

import  {
	BrowserRouter as Router,
	Switch
} from "react-router-dom"
import Navigation from "./components/Navigation"
import routes from "./router/Routes"
import { RouteWithSubRoutes } from "./router/Routes"

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

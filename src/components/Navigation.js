import React from "react"
import "../styles/Navigation.module.scss"
import  {
	Link
} from "react-router-dom"

const navigation = () => {
	return <nav>
			<ul className="list-inline">
				<li className="list-item">
					<Link to="increment">Increment</Link>
				</li>
				<li className="list-item">
					<Link to="temperature">Temperature</Link>
				</li>
				<li className="list-item">
					<Link to="crud">CRUD</Link>
				</li>
				<li className="list-item">
					<Link disabled tabIndex="-1" to="">Flight Booker</Link>
				</li>
				<li className="list-item">
					<Link disabled tabIndex="-1" to="">Timer</Link>
				</li>
				<li className="list-item">
					<Link disabled tabIndex="-1" to="">Circle Drawer</Link>
				</li>
				<li className="list-item">
					<Link disabled tabIndex="-1" to="">Cells</Link>
				</li>
			</ul>
		</nav>
};
export default navigation;
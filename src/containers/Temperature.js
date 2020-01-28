import React from "react";
import styles from "../styles/Temperature.module.scss"
import { Celsius } from "../components/Celsius"
import { Fahrenheit } from "../components/Fahrenheit"
import {convertFahrenheit, convertCelsius } from "../actions/temperatureActions";
import {connect} from "react-redux";

class Temperature extends React.Component {
	render() {
		return (
			<section className={`row ${styles['comp-temp']}`}>
				<Celsius updateFahrenheit={ () => this.props.updateFahrenheit } celsius={this.props.celsius}/>
				&nbsp;=&nbsp;
				<Fahrenheit updateCelsius={ () => this.props.updateCelsius } fahrenheit={this.props.fahrenheit}/>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		celsius: state.temperature.celsius,
		fahrenheit: state.temperature.fahrenheit
	}
};

const mapDispatchToProps = (dispatch) => {
 return {
 	updateCelsius: (celsius) => {
 	 dispatch(convertCelsius(celsius))
	},
	 updateFahrenheit: (fahrenheit) => {
		dispatch(convertFahrenheit(fahrenheit))
	}
 }
};

export default connect(mapStateToProps,mapDispatchToProps)(Temperature);
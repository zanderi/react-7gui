import React from "react";
import styles from "../styles/Temperature.module.scss"
import { Celsius } from "../components/Celsius"
import { Fahrenheit } from "../components/Fahrenheit"
import {setFahrenheit, setCelsius } from "../actions/temperatureActions";
import {connect} from "react-redux";

class Temperature extends React.Component {
	render() {
		return (
			<section className={`row ${styles['comp-temp']}`}>
				<Celsius updateTemp={ () => this.props.setCelsius } celsius={this.props.celsius}/>
				=
				<Fahrenheit updateTemp={ () => this.props.setFahrenheit } fahrenheit={this.props.fahrenheit}/>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		celsius: state.temp.celsius,
		fahrenheit: state.temp.fahrenheit
	}
};

const mapDispatchToProps = (dispatch) => {
	console.log('dispatch:');
 return {
 	setCelsius: (celsius) => {
 	 dispatch(setCelsius(celsius))
	},
	setFahrenheit: (fahrenheit) => {
		dispatch(setFahrenheit(fahrenheit))
	}
 }
};

export default connect(mapStateToProps,mapDispatchToProps)(Temperature);
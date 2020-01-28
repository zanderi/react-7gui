import React from "react";
import styles from "../styles/Temperature.module.scss"
import { TempInput } from "../components/TempInput"
import {convertToFahrenheit, convertToCelsius } from "../actions/temperatureActions";
import {connect} from "react-redux";

class Temperature extends React.Component {
	render() {
		return (
			<section className={`row ${styles['comp-temp']}`}>
				<TempInput label={'Celsius'} updateTemp={ this.props.setFahrenheit } temperature={this.props.celsius}/>
				&nbsp;=&nbsp;
				<TempInput label={'Fahrenheit'} updateTemp={ this.props.setCelsius } temperature={this.props.fahrenheit}/>
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
 return {
 	setCelsius: (celsius) => {
 	 dispatch(convertToFahrenheit(celsius))
	},
	setFahrenheit: (fahrenheit) => {
		dispatch(convertToCelsius(fahrenheit))
	}
 }
};

export default connect(mapStateToProps,mapDispatchToProps)(Temperature);
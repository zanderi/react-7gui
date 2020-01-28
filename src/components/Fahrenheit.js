import React from "react";

export const Fahrenheit = (props) => {
	return (
		<label htmlFor="fahrenheit">
			<input id="fahrenheit" type="text"
				defaultValue={props.fahrenheit}
				onChange={ () => this.props.setFahrenheit(this.value)}
			/>
			Fahrenheit
		</label>
	)
};
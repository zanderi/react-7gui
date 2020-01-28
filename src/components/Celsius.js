import React from "react";

export const Celsius = (props) => {
	return (
		<label htmlFor="celsius">
		<input id="celsius" type="text"
					 value={props.celsius}
					 onChange={(e) => props.updateFahrenheit(e.target.value)}
		/>
			Celsius
		</label>
	)
};
import React from "react";

export const Celsius = (props) => {
	return (
		<label htmlFor="celsius">
		<input id="celsius" type="text"
					 defaultValue={props.celsius}
					 onChange={() => props.updateTemp(this.value)}
		/>
			Celsius
		</label>
	)
};
import React from "react";

export const TempInput = (props) => {
	return (
		<label htmlFor={props.label}>
			<input id={props.label} type="text"
						 value={props.temperature}
						 onChange={(event) => props.updateTemp(event.target.value)}
			/>
			{props.label}
		</label>
	)
};
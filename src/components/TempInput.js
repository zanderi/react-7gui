import React from "react";

export const TempInput = (props) => {
	return (
		<label htmlFor={props.label.toLowerCase()}>
			<input id={props.label.toLowerCase()} type="text"
						 value={props.temperature}
						 onChange={(event) => props.updateTemp(event.target.value)}
			/>
			{props.label}
		</label>
	)
};
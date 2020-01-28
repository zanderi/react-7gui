import React from "react";

export class Fahrenheit extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	static getDerivedStateFromProps (nextProps) {
		this.setInputValue(nextProps.fahrenheit);
	}

	setInputValue (val) {
		this.inputRef.value = val;
	}

	render () {
		return (
			<label htmlFor="fahrenheit">
				<input id="fahrenheit" type="text"
							 ref={this.inputRef}
							 onChange={(event) => this.props.updateCelsius(event.target.value)}
				/>
				Fahrenheit
			</label>
		)
	}
}
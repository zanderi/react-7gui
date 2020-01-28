export function setCelsius(temp) {
	return {
		type:"CONVERT_CELSIUS",
		payload: temp
	}
}

export function setFahrenheit(temp) {
	return {
		type:"CONVERT_FAHRENHEIT",
		payload: temp
	}
}
export function convertToFahrenheit(temp) {
	return {
		type:"CONVERT_CELSIUS",
		payload: temp
	}
}

export function convertToCelsius(temp) {
	return {
		type:"CONVERT_FAHRENHEIT",
		payload: temp
	}
}
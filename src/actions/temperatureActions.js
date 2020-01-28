export function convertCelsius(temp) {
	return {
		type:"CONVERT_CELSIUS",
		payload: temp
	}
}

export function convertFahrenheit(temp) {
	return {
		type:"CONVERT_FAHRENHEIT",
		payload: temp
	}
}
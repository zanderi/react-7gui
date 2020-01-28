const initialState = {
	fahrenheit: '',
	celsius: ''
};

const temperatureReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CONVERT_CELSIUS":
			if (action.payload.match(/^[\d]*[.]?[\d]*$/)) {
				state = {
					...state,
					celsius: (action.payload.trim() - 32) * (5 / 9),
					fahrenheit: action.payload.trim()
				}
			}
			break;
		case "CONVERT_FAHRENHEIT":
			if (action.payload.match(/^[\d]*[.]?[\d]*$/)) {
				state = {
					...state,
					fahrenheit: (action.payload.trim() * (9 / 5) + 32),
					celsius: action.payload.trim()
				}
			}
			break;
		default:
			return state;
	}
	return state;
};

export default temperatureReducer;
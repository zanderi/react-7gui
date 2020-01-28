import { initialState } from "../store/store";

const temperatureReducer = (state = initialState, action) => {
	console.log('action', action.type);
	switch (action.type) {
		case "CONVERT_CELSIUS":
			console.log('convert C');
			if (action.payload.match(/^[\d]*[.]?[\d]*$/)) {
				state = {
					...state,
					fahrenheit: action.payload.trim(),
					celsius: (action.payload.trim() - 32) * (5 / 9)
				}
			}
			break;
		case "CONVERT_FAHRENHEIT":
			console.log('convert F');
			if (action.payload.match(/^[\d]*[.]?[\d]*$/) && action.payload !== '') {
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
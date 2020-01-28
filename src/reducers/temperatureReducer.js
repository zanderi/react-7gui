import { initialState } from "../store/store";

const temperatureReducer = (state = initialState, action) => {
	console.log('action', action.type)
	switch (action.type) {
		case "CONVERT_CELSIUS":
			if (action.payload.match(/^[\d]*[.]?[\d]*$/)) {
				state = {
					...state,
					celsius: (action.payload.trim() - 32) * (5 / 9)
				}
			}
			break;
		case "CONVERT_FAHRENHEIT":
			if (action.payload.match(/^[\d]*[.]?[\d]*$/) && action.payload !== '') {
				state = {
					...state,
					fahrenheit: (action.payload.trim() * (9 / 5) + 32)
				}
			}
			break;
		default:
			return state;
	}
	return state;
};

export default temperatureReducer;
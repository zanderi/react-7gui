import {createStore, combineReducers} from "redux";
import increment from "../reducers/incrementReducer";
import temperature from "../reducers/temperatureReducer";

export const initialState = {
	incrementCount: 0,
	fahrenheit: '',
	celsius: '',
	crud: {
		nameFirst: '',
		nameLast: '',
		filter: '',
		users: [],
		userExists: false,
		updateDeleteDisabled: true
	}
};

export const store = createStore(combineReducers({count: increment, temperature: temperature}));


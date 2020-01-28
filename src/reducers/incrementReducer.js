import { initialState } from '../store/store';

const incrementCountReducer = (state = initialState, action) => {
	if (action.type === "INCREMENT_COUNT") {
		state	= {
			...state,
			incrementCount: ++state.incrementCount
		};
	}
	return state;
};

export default incrementCountReducer
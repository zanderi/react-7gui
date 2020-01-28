const initialState = {	incrementCount: 0 };

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
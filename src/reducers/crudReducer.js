const initialState = {
		nameFirst: '',
		nameLast: '',
		filter: '',
		users: [],
		userExists: false,
		updateDeleteDisabled: true
};

const crudReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_FILTER":
			return state = {
				...state,
				filter: action.payload
			};
		case "SET_FIRST_NAME":
			return state = {
				...state,
				nameFirst: action.payload
			};
		case "SET_LAST_NAME":
			return state = {
				...state,
				nameLast: action.payload
			};
		case "CREATE_USER":
			state.users.find(user => {
				if(user.first === state.nameFirst && user.last === state.nameLast) {
					state = {
						...state,
						userExists: true,
						nameFirst: '',
						nameLast: ''
					}
				}
				return state;
			});
			if (!state.userExists) {
				return state = {
					...state,
					users: [...state.users, {
						fullName: state.nameLast + ', ' + state.nameFirst,
						selected: false,
						first: state.nameFirst,
						last: state.nameLast
					}],
					nameFirst: '',
					nameLast: ''
				}
			}
			break;
		case "UPDATE_USER":
			return state = {
				...state,
				fullName: state.nameLast + ', ' + state.nameFirst,
				nameFirst: '',
				nameLast: '',
				users: state.users.map( user => {
					if(user.selected){
						return {
							...user,
							fullName: state.nameLast + ', ' + state.nameFirst,
							selected: false,
							first: state.nameFirst,
							last: state.nameLast
						}
					}
					return user;
				}),
				updateDeleteDisabled: true
			};
		case "DELETE_USER":
			return state = {
				...state,
				users: state.users.filter(user => {
					return !user.selected
				}),
				nameFirst: '',
				nameLast: '',
				updateDeleteDisabled: true
			};
		case "TOGGLE_SELECTED_USER":
			return state = {
				...state,
				users: state.users.map((user) => {
					return {
						...user,
						selected: user.fullName === action.payload.fullName
					}
				}),
				nameFirst: action.payload.first,
				nameLast: action.payload.last,
				updateDeleteDisabled: false
			};
		default:
			return state;
	}
	return state;
};

export default crudReducer
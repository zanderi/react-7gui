const initialState = {
	crud: {
		nameFirst: '',
		nameLast: '',
		filter: '',
		users: [],
		userExists: false,
		updateDeleteDisabled: true
	}
};

const crudReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_FILTER":
			console.log('set filter');
			state = {
				...state,
				filter: action.payload
			};
			break;
		case "SET_FIRST_NAME":
			state = {
				...state,
				nameFirst: action.payload
			};
			break;
		case "SET_LAST_NAME":
			state = {
				...state,
				nameLast: action.payload
			};
			break;
		case "CREATE_USER":
			state.users.find(user => {
				if(user.first === action.payload.first && user.last === action.payload.last) {
					state = {
						...state,
						userExists: true,
						nameFirst: '',
						nameLast: ''
					}
				}
			});
			if (!state.userExists) {
				state = {
					...state,
					users: [...state.users, {
						fullName: action.payload.last + ', ' + action.payload.first,
						selected: false
					}],
					nameFirst: '',
					nameLast: ''
				}
			}
			break;
		case "UPDATE_USER":
			state.users.find(user => {
				if(user.selected) {
					state = {
						...state,
						fullName: action.payload.last + ', ' + action.payload.first,
						users: [...state.users, action.payload]
					}
				}
			});
			break;
		case "DELETE_USER":
			state = {
				...state,
				users: state.crud.users.filter(user => {
					return !user.selected
				}),
				nameFirst: '',
				nameLast: '',
				updateDeleteDisabled: true
			};
			break;
		case "TOGGLE_SELECTED_USER":
			state = {
				...state,
				users: state.users.forEach(user => (
					(user.fullName === action.payload.fullName) ? user.selected = true : user.selected = false
				)),
				nameFirst: action.payload.first,
				nameLast: action.payload.last,
				updateDeleteDisabled: false
			};
		break;
		default:
			return state;
	}
	return state;
};

export default crudReducer
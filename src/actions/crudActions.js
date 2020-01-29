export function setFilter (name) {
	return {
		type: "SET_FILTER",
		payload: name
	}
}

export function setFirstName (name) {
	return {
		type: "SET_FIRST_NAME",
		payload: name
	}
}

export function setLastName (name) {
	return {
		type: "SET_LAST_NAME",
		payload: name
	}
}

export function createUser (user) {
	return {
		type: "CREATE_USER",
		payload: user
	}
}

export function updateUser (user) {
	return {
		type: "UPDATE_USER",
		payload: user
	}
}

export function deleteUser (user) {
	return {
		type: "DELETE_USER",
		payload: user
	}
}

export function toggleSelectedUser (user) {
	return {
		type: "TOGGLE_SELECTED_USER",
		payload: user
	}
}
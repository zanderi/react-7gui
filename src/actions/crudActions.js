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

export function createUser () {
	return {
		type: "CREATE_USER"
	}
}

export function updateUser () {
	return {
		type: "UPDATE_USER"
	}
}

export function deleteUser () {
	return {
		type: "DELETE_USER"
	}
}

export function toggleSelectedUser (user) {
	return {
		type: "TOGGLE_SELECTED_USER",
		payload: user
	}
}
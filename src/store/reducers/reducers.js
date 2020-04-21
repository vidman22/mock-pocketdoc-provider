import * as actionTypes from '../actions/actionTypes';


const initialState = {
	user: null,
	lessonSet: [],
	insertTexts: {},
	omissions: {},
	omissionsWithOptions: {},
}

const reducer = (state = initialState , action) => {
	if (action.type === actionTypes.AUTH_SUCCESS) {
		return {
			...state,
			user: {
				id: action.id,
				email: action.email,
				username: action.username,
				picture: action.picture,
				userID: action.uuid
			}
		}
	}
	if (action.type === actionTypes.AUTH_FAIL) {
		return {
			...state,
			auth: action.val
		}
	}
	if (action.type === actionTypes.LOGOUT) {
		return {
			...state,
			user: null,
		}
	}
	return state;
}

export default reducer;
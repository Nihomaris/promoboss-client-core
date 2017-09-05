/*
sign in

request params: 
- login
*/
export const signIn = (data) => {
	return dispatch => {
		dispatch({type: 'SIGN_IN'})
	}
}

/*
login

request params: 
- login
- code
*/
export const logIn = (data) => {
	return dispatch => {
		dispatch({type: 'LOG_IN'})
	}
}

/*
logout
*/
export const logOut = (data) => {
	return dispatch => {
		dispatch({type: 'LOG_OUT'})
	}
}

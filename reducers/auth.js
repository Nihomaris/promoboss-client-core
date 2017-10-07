const auth = (state = {}, action) => {

	if(action.type === 'SIGN_IN') {
		console.log('Reg')
		// return {...state, sid: 'nih'}
	}

	if(action.type === 'LOG_IN') {
		console.log('Log')
	}

	return state;
}

export default auth;
import { authState } from '../config/init-state';

console.log(authState)

const auth = (state = authState, action) => {

	if(action.type === 'SIGN_IN') {
		return state;
	}

	if(action.type === 'LOG_IN') {
		return (Object.assign({}, state, {sid: action.payload.sid, user: action.payload.user}))
	}

	return state;
}

export default auth;
import { authState } from '../config/init-state';

const auth = (state = authState, action) => {

	if(action.type === 'SIGN_IN') {
		return state;
	}

	if(action.type === 'LOG_IN') {
		return Object.assign({}, state, {sid: action.payload.sid, user: action.payload.user});
	}

	if(action.type === 'LOG_OUT') {
		return Object.assign({}, state, {sid: null, user: null});
	}

	return state;
}

export default auth;
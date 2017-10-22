import { routerState } from '../lib/init-state';
import {
	ROUTE_LOGIN_SCREEN,
	ROUTE_SMS_SCREEN,
	ROUTE_MAIN_SCREEN
	} from '../lib/constants';

const route = (state = routerState, action) => {

	if(action.type === ROUTE_LOGIN_SCREEN) {
		return Object.assign({}, state, { loginScreen: true, smsScreen: false, mainScreen: false });
	}

	if(action.type === ROUTE_SMS_SCREEN) {
		return Object.assign({}, state, { loginScreen: false, smsScreen: true, mainScreen: false });
	}

	if(action.type === ROUTE_MAIN_SCREEN) {
		return Object.assign({}, state, { loginScreen: false, smsScreen: false, mainScreen: true });
	}
	
	return state;
}

export default route;
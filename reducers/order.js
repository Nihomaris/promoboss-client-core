import { orderState } from '../lib/init-state';
import {
	SHOW_ORDERS_LIST,
	SHOW_ORDER_DETAIL,
	CANCEL_ORDER,
	SHOW_ORDER_ROUTING,
	GET_ORDER_PRICE,
	CREATE_ORDER,
	UPDATE_ORDER
	} from '../lib/constants';

const order = (state = orderState, action) => {

	if(action.type === SHOW_ORDERS_LIST) {
		return Object.assign({}, state, { orders: action.payload });
	}

	if(action.type === SHOW_ORDER_DETAIL) {
		return Object.assign({}, state, { order_detail: action.payload });
	}

	if(action.type === SHOW_ORDER_ROUTING) {
		return Object.assign({}, state, { order_routing: action.payload });
	}
	return state;
}

export default order;
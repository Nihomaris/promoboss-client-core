import { orderState } from '../config/init-state';

const order = (state = orderState, action) => {

	if(action.type === 'SHOW_ORDERS_LIST') {
		return Object.assign({}, state, { orders: action.payload });
	}

	if(action.type === 'SHOW_ORDER_DETAIL') {
		return Object.assign({}, state, { order_detail: action.payload });
	}

	if(action.type === 'SHOW_ORDER_ROUTING') {
		return Object.assign({}, state, { order_routing: action.payload });
	}
	return state;
}

export default order;
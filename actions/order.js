
/* 
get and show client list of orders

request params: 
- sid 
*/
export const getOrdersList = () => {
	return dispatch => {
		dispatch({type: 'SHOW_ORDERS_LIST'})
	}
}

/* 
show order detail 

request params: 
- sid 
- order_id 
*/
export const showOrderDetail = (data) => {
	return dispatch => {
		dispatch({type: 'SHOW_ORDER_DETAIL'})
	}
}

/*
show order routing

request params: 
- sid 
- order_id 
*/
export const showOrderRouting = (data) => {
	return dispatch => {
		dispatch({type: 'SHOW_ORDER_ROUTING'})
	}
}

/*
cancel order

request params: 
- sid 
- order_id 
*/
export const cancelOrder = (data) => {
	return dispatch => {
		dispatch({type: 'CANCEL_ORDER'})
	}
}

/*
get order price

request params: 
?
*/
export const getOrderPrice = (data) => {
	return dispatch => {
		dispatch({type: 'GET_ORDER_PRICE'})
	}
}

/*
create order

request params: 
- sid
- schedule: [{start: unixtime, end: unixtime}]
- people: 
- stock_address
- stock_coordinates: {lat: 11.11, lgn: 22.111}
- work_address
- work_coordinates: {lat: 11.11, lgn: 22.111}
- comment
*/
export const createOrder = (data) => {
	return dispatch => {
		dispatch({type: 'CREATE_ORDER'})
	}
}

/*
update order

request params: 
- sid
- schedule: [{start: unixtime, end: unixtime}]
- people: 
- stock_address
- stock_coordinates: {lat: 11.11, lgn: 22.111}
- work_address
- work_coordinates: {lat: 11.11, lgn: 22.111}
- comment
*/
export const updateOrder = (data) => {
	return dispatch => {
		dispatch({type: 'UPDATE_ORDER'})
	}
}
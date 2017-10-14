
/* 
get and show client list of orders

request params: 
- sid 
*/
export const getOrdersList = (data) => {
	console.log('action: ', data)
	return dispatch => {
		fetch('/orders.get',
			{
				method: 'post',
				// body: JSON.stringify({"sid": data.sid}),
				body: JSON.stringify({"sid": "f84252d50649458563d53e0f0232519e74451657"}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { 
				if(data.response.status === 1) {
					dispatch({type: 'SHOW_ORDERS_LIST', payload: data.response.orders}) 
				}
			})
			.catch((err) => { console.error('Ошибка: ', err) })
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
		fetch('/order.get',
			{
				method: 'post',
				// body: JSON.stringify({"sid": data.sid, "order_id": data.order_id}),
				body: JSON.stringify({"sid": "f84252d50649458563d53e0f0232519e74451657", "order_id": 1}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { 
				if(data.response.status === 1) {
					dispatch({type: 'SHOW_ORDER_DETAIL', payload: data.response.order}) 
				}
			})
			.catch((err) => { console.error('Ошибка: ', err) })
		
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
		fetch('/routing.get',
			{
				method: 'post',
				// body: JSON.stringify({"sid": data.sid, "order_id": data.order_id}),
				body: JSON.stringify({"sid": "f84252d50649458563d53e0f0232519e74451657", "order_id": 1}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { 
				console.log(data)
				if(data.status === 1) {
					dispatch({type: 'SHOW_ORDER_ROUTING', payload: data.routing})
				} 
			})
			.catch((err) => { console.error('Ошибка: ', err) })
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
		fetch('/order.delete',
			{
				method: 'post',
				// body: JSON.stringify({"sid": data.sid, "order_id": data.order_id}),
				body: JSON.stringify({"sid": "f84252d50649458563d53e0f0232519e74451657", "order_id": 1}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { console.log(data) })
			.catch((err) => { console.error('Ошибка: ', err) })
		// dispatch({type: 'CANCEL_ORDER'})
	}
}

/*
get order price

request params: 
?
*/
export const getOrderPrice = (data) => {
	return dispatch => {
		// dispatch({type: 'GET_ORDER_PRICE'})
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
		fetch('/order.create',
			{
				method: 'post',
				body: JSON.stringify({
					"sid": data.sid,
					"schedule": data.schedule,
					"people": data.people,
					"stock_address": data.stock_address,
					"stock_coordinates": data.stock_coordinates,
					"work_address": data.work_address,
					"work_coordinates": data.work_coordinates,
					"comment": data.comment || ''
				}),
				/*body: JSON.stringify({
					"sid": "f84252d50649458563d53e0f0232519e74451657",
					"schedule": [{start: 1488832113, end: 1488872113}],
					"people": 1,
					"stock_address": "Tupoleva 15",
					"stock_coordinates": {lat: 11.11, lgn: 22.111},
					"work_address": "Tupoleva 27",
					"work_coordinates": {lat: 11.11, lgn: 22.111},
					"comment": "Тест"
				}),*/
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { console.log(data) })
			.catch((err) => { console.error('Ошибка: ', err) })
		// dispatch({type: 'CREATE_ORDER'})
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
		fetch('/order.edit',
			{
				method: 'post',
				body: JSON.stringify({
					"sid": data.sid,
					"id": data.order_id,
					"schedule": data.schedule,
					"people": data.people,
					"stock_address": data.stock_address,
					"stock_coordinates": data.stock_coordinates,
					"work_address": data.work_address,
					"work_coordinates": data.work_coordinates,
					"comment": data.comment || ''
				}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { console.log(data) })
			.catch((err) => { console.error('Ошибка: ', err) })
		// dispatch({type: 'UPDATE_ORDER'})
	}
}
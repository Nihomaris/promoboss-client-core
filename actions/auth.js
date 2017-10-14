/*
sign in

request params: 
- login
{ "login": "9276123460" }
*/
export const signIn = (data) => {

	return dispatch => {
		fetch('/sign',
			{
				method: 'post',
				body: JSON.stringify({"login": data.login}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { dispatch({type: 'SIGN_IN'}) })
			.catch((err) => { console.error('Ошибка: ', err) })
	}
}

/*
login

request params: 
- login
- code
{"login": "9276123460", "code": "666667"}
*/
export const logIn = (data) => {
	
	return dispatch => {
		fetch('/sign',
			{
				method: 'post',
				body: JSON.stringify({"login": "9276123460", "code": "666667"}),
				// body: JSON.stringify({"login": data.login, "code": data.code}),
				credentials: "same-origin",
			}) 
			.then((res) => { return res.json() })
			.then((data) => { 
				dispatch({type: 'LOG_IN', payload: data.response})
			})
			.catch((err) => { console.error('Ошибка: ', err) })
	}
}

/*
logout
*/
export const logOut = () => {
	return dispatch => {
		dispatch({type: 'LOG_OUT'})
	}
}

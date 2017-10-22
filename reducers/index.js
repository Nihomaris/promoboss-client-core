import { combineReducers } from 'redux'

import order from './order'
import auth from './auth'
import router from './router'

const redusers = combineReducers({
    auth,
    order,
    router
})


export default redusers;
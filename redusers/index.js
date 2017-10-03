import { combineReducers } from 'redux'

import order from './order'
import auth from './auth'

const redusers = combineReducers({
    auth
})


export default redusers;
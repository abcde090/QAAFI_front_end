import { combineReducers } from 'redux-immutable'

import { reducer as allocationReportReducer } from '../views/AllocationReport/store'
import { reducer as staffReportReducer } from '../views/StaffReport/store'
import { authReducer, errorReducer } from '../views/SignIn/store'


const reducer = combineReducers({ allocationReportReducer,staffReportReducer, authReducer, errorReducer})

export default reducer

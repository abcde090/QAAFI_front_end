import { Map } from 'immutable'
import * as constants from './constants'


const defaultState = Map({
  columns: [],
  staff: []
})

export default (state = defaultState, action) => {

  switch (action.type) {

    case constants.CHANGE_COLUMNS_DATA:
      return state.set("columns", action.columns)

    case constants.CHANGE_STAFF_DATA:
      return state.set("staff", action.staff)

      case constants.ADD_STAFF_DATA:
          return state.set("staff",[...state.get("staff"),action.newRow])

        case constants.DELETE_STAFF_DATA:
            let deleteStaff = [...state.get("staff")]
            deleteStaff.splice(deleteStaff.indexOf(action.oldData), 1);
            return state.set("staff",[...deleteStaff])

        case constants.UPDATE_STAFF_DATA:
          let old = [...state.get("staff")]
          old[old.indexOf(action.oldData)] = action.newData
          return state.set("staff", [...old])

    default:
      return state
  }
}
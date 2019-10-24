import { Map } from 'immutable'
import * as constants from './constants'


const defaultState = Map({
  columns: [],
  allocations: []
})

export default (state = defaultState, action) => {

  switch (action.type) {

    case constants.CHANGE_COLUMNS_DATA:
      return state.set("columns", action.columns)

    case constants.CHANGE_ALLOCATIONS_DATA:
      return state.set("allocations", action.allocations)

    case constants.ADD_ALLOCATIONS_DATA:
      return state.set("allocations",[...state.get("allocations"),action.newRow])

    case constants.DELETE_ALLOCATIONS_DATA:
        let deleteAllocations = [...state.get("allocations")]
        deleteAllocations.splice(deleteAllocations.indexOf(action.oldData), 1);
        return state.set("allocations",[...deleteAllocations])

    case constants.UPDATE_ALLOCATIONS_DATA:
      let oldAllocations = [...state.get("allocations")]
      oldAllocations[oldAllocations.indexOf(action.oldData)] = action.newData
      return state.set("allocations", [...oldAllocations])

    default:
      return state
  }
}
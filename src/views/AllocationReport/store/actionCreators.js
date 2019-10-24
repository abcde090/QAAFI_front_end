import * as constants from './constants'
import axios from 'axios'

export const getColumnsList = () => {
  return (dispatch) => {
    axios.get('/allocationColumns').then((res) => {
      const result = res.data
      dispatch(changeColumns(result))
    })
  }
}

const changeColumns = (result) => {
  return {
    type: constants.CHANGE_COLUMNS_DATA,
    columns: result
  }
}

export const getAllocationList = () => {
  return (dispatch) => {
    axios.get('/allocations').then((res) => {
      const result = res.data
      dispatch(changeAllocations(result))
    })
  }
}

const changeAllocations = (result) => {
  return {
    type: constants.CHANGE_ALLOCATIONS_DATA,
    allocations:result
  }
}
export const getAddAllocationsResult = (newRow)=>{
  return (dispatch) => {
    let id = parseInt(newRow.id)
    newRow.id = id
    axios.post('/allocations',newRow).then((res) => {
      if(res.status === 201){
          dispatch(addAllocations(newRow))
      }
    }).catch((err) => {
      alert(err)
  })
  }
}

const addAllocations =(newRow)=>({
  type:constants.ADD_ALLOCATIONS_DATA,
  newRow
})

export const getDeleteAllocationsResult = (oldData)=>{
  return(dispatch)=>{
    let id = oldData.id
    axios.delete(`/allocations/${id}`).then((res)=>{
    if(res.status === 200){
       dispatch(deleteAllocations(oldData))
    }
}).catch((err) => {
    alert(err)
})
}}

const deleteAllocations = (oldData)=>({
  type:constants.DELETE_ALLOCATIONS_DATA,
  oldData
})

export const getUpdateAllocationsResult = (newData,oldData)=>{
  return (dispatch) =>{
    let id = oldData.id
    let newDataId = parseInt(newData.id)
    newData.id = newDataId
    axios.patch(`/allocations/${id}`,newData).then((res)=>{
      if (res.status === 200) {
        dispatch(updateAllocations(newData,oldData))
      }
    }).catch((err) => {
      alert(err)
  })
  }
}

const updateAllocations = (newData,oldData)=>({
  type:constants.UPDATE_ALLOCATIONS_DATA,
  newData,
  oldData
})

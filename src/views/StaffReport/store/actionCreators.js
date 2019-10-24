import * as constants from './constants'
import axios from 'axios'

export const getColumnsList = () => {
  return (dispatch) => {
    axios.get('/staffColumns').then((res) => {
      const result = res.data
      if(res.status === 200){
       dispatch(changeColumns(result))
      }
    })
  }
}

const changeAllocations = (result) => {
  return {
    type: constants.CHANGE_STAFF_DATA,
    staff:result
  }
}

export const getStaffList = () => {
  return (dispatch) => {
    axios.get('/staff').then((res) => {
      const result = res.data
      if(res.status === 200){
      dispatch(changeAllocations(result))
      }
    })
  }
}

const changeColumns = (result) => {
  return {
    type: constants.CHANGE_COLUMNS_DATA,
    columns: result
  }
}

export const getAddStaffResult = (newRow)=>{

  return (dispatch) => {
    let id = parseInt(newRow.id)
    newRow.id = id
    axios.post('/staff',newRow).then((res) => {
      if(res.status === 201){
          dispatch(addStaff(newRow))
      }
    }).catch((err) => {
      alert(err)
  })
  }
}

const addStaff =(newRow)=>({
  type:constants.ADD_STAFF_DATA,
  newRow
})

export const getDeleteStaffResult = (oldData)=>{
  return(dispatch)=>{
    let id = 0;
    if(oldData.id === undefined){
      id = oldData.tableData.id + 1
    }else{
      id = oldData.id
    }
    axios.delete(`/staff/${id}`).then((res)=>{
    if(res.status === 200){
       dispatch(deleteStaff(id))
    }
}).catch((err) => {
    alert(err)
})
}}

const deleteStaff = (id)=>({
  type:constants.DELETE_STAFF_DATA,
  id
})

export const getUpdateStaffResult = (newData,oldData)=>{
  return (dispatch) =>{
    let id = 0;
    if(oldData.id === undefined){
      id = oldData.tableData.id + 1
    }else{
      id = oldData.id
    }
    axios.patch(`/staff/${id}`,newData).then((res)=>{
      if (res.status === 200) {
        dispatch(updateStaff(newData,oldData))
      }
    }).catch((err) => {
      alert(err)
  })
  }
}

const updateStaff = (newData,oldData)=>({
  type:constants.UPDATE_STAFF_DATA,
  newData,
  oldData
})

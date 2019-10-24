import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";

import MaterialTable from "material-table";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

const StaffReport = props => {
  const columns = useSelector(state =>
    state.getIn(["staffReportReducer", "columns"])
  );
  const staff = useSelector(state =>
    state.getIn(["staffReportReducer", "staff"])
  );
  const auth = useSelector(state =>
    state.getIn(["authReducer", "isAuthenticated"])
  );

  useEffect(() => {
    props.getColumnsList();
  }, [props, props.columns]);

  useEffect(() => {
    props.getStaffList();
  }, [props, props.staff]);

  return (
    <>
      {auth ? null : <Redirect to="/admin" />}
      <MaterialTable
        title="Staff Report"
        columns={columns}
        data={staff}
        options={{
          exportButton: true,
          pageSizeOptions: [50, 100, 150],
          pageSize: 50
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                parseInt(newData.id);
                props.addStaff(newData);
              });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                props.updateStaff(newData, oldData);
              });
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                props.deleteStaff(oldData);
              });
            })
        }}
      />
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getColumnsList() {
      dispatch(actionCreators.getColumnsList());
    },
    getStaffList() {
      dispatch(actionCreators.getStaffList());
    },
    addStaff(data) {
      dispatch(actionCreators.getAddStaffResult(data));
    },
    deleteStaff(oldData) {
      dispatch(actionCreators.getDeleteStaffResult(oldData));
    },
    updateStaff(newData, oldData) {
      dispatch(actionCreators.getUpdateStaffResult(newData, oldData));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(StaffReport);

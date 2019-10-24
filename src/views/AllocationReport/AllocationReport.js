import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";

import MaterialTable from "material-table";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

const AllocationReport = props => {
  const columns = useSelector(state =>
    state.getIn(["allocationReportReducer", "columns"])
  );
  const allocations = useSelector(state =>
    state.getIn(["allocationReportReducer", "allocations"])
  );
  const auth = useSelector(state =>
    state.getIn(["authReducer", "isAuthenticated"])
  );

  useEffect(() => {
    props.getColumnsList();
  }, [props, props.columns]);

  useEffect(() => {
    props.getAllocationsList();
  }, [props, props.allocations]);

  return (
    <>
      {auth ? null : <Redirect to="/admin" />}
      <MaterialTable
        title="Allocation Report"
        columns={columns}
        data={allocations}
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
                props.addAllocations(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                props.updateAllocations(newData, oldData);
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                props.deleteAllocations(oldData);
                console.log(oldData);
              }, 600);
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
    getAllocationsList() {
      dispatch(actionCreators.getAllocationList());
    },
    addAllocations(data) {
      dispatch(actionCreators.getAddAllocationsResult(data));
    },
    deleteAllocations(oldData) {
      dispatch(actionCreators.getDeleteAllocationsResult(oldData));
    },
    updateAllocations(newData, oldData) {
      dispatch(actionCreators.getUpdateAllocationsResult(newData, oldData));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AllocationReport);

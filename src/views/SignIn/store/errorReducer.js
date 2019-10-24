import * as constants from "./constants";

const initialState = {
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

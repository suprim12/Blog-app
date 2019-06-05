import * as types from "../actions/type";
const intialState = {};

export default function(state = intialState, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

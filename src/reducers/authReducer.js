import * as types from "../actions/type";
const intialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = intialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated:
          Object.keys(action.payload).length === 0 ? false : true,
        user: action.payload
      };
    default:
      return state;
  }
}

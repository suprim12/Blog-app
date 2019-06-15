import * as types from "../actions/type";
const intialState = {
  posts: [],
  post: ""
};

const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case types.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.post]
      };
    default:
      return state;
  }
};

export default postReducer;

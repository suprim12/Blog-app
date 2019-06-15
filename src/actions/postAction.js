import * as types from "./type";
import axios from "axios";
// Get posts
export const get_posts = () => dispatch => {
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: types.FETCH_POSTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
// Like posts
export const likepost = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => {
      //  DISPATCH LIKE POSTS
      dispatch(get_posts());
    })
    .catch(err => console.log(err));
};
//dislikeposts
export const dislikepost = id => dispatch => {
  axios
    .post(`/api/posts/dislike/${id}`)
    .then(res => {
      //  DISPATCH LIKE POSTS
      dispatch(get_posts());
    })
    .catch(err => console.log(err));
};

// add posts
export const addpost = (postData, history) => dispatch => {
  axios
    .post("/api/posts/", postData)
    .then(res => {
      dispatch({
        type: types.ADD_POST,
        payload: res.data
      });
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      });
    });
};

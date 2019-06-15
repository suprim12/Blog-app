import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
// Components
import Nav from "./components/Nav";
import Posts from "./components/posts/Posts";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CreatePost from "./components/posts/CreatePost";

// LOGIN LOGIC
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  const decode = jwt_decode(token);
  // SET AUTH
  if (token) {
    axios.defaults.headers.common["auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["auth-token"];
  }
  // SET CURRENT USER
  store.dispatch(setCurrentUser(decode));
  // CHECK FOR EXPIRE TOKEN
  // Check for Expired Token
  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    store.dispatch(logoutUser());
    // REDIRECT
    window.location.href = "/login";
  }
}

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/addpost" component={CreatePost} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

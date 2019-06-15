import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Nav extends Component {
  logout = e => {
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authlinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/addpost">
            Add posts
          </Link>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.logout}>
            Logout
          </span>
        </li>
        <li className="nav-item">
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.username}
            style={{ width: "25px", marginRight: "5px", marginTop: "0.5rem" }}
          />
        </li>
      </React.Fragment>
    );
    const guestlinks = (
      <React.Fragment>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </React.Fragment>
    );
    return (
      <div>
        <nav
          className="navbar navbar-expand-md bg-dark p-1 navbar-dark"
          id="menu"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Blog App
              <span
                className="badge badge-pill badge-primary"
                style={{ fontSize: "0.75rem", marginLeft: "0.2rem" }}
              >
                MERN
              </span>
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                {isAuthenticated ? authlinks : guestlinks}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);

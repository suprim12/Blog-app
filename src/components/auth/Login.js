import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// COMPONENTS
import InputField from "./InputField";
// ACTIONS
import { loginuser } from "../../actions/authActions";
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    // User Login Data
    const userData = {
      email,
      password
    };
    this.props.loginuser(userData, this.props.history);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { email, password, errors } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mt-5">
              <div className="card card-body bg-dark text-white">
                <h4 className="card-text">Login Form</h4>
                <form className="login-form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <InputField
                      type="email"
                      name="email"
                      value={email}
                      change={this.handleChange}
                      placeholder="Email"
                      errors={errors}
                    />
                  </div>
                  <div className="form-group">
                    <InputField
                      type="password"
                      name="password"
                      value={password}
                      change={this.handleChange}
                      placeholder="Password"
                      errors={errors}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginuser }
)(withRouter(Login));

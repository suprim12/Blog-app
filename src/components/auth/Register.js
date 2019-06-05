import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// COMPONENTS
import InputField from "./InputField";
// ACTIONS
import { registeruser } from "../../actions/authActions";
class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    errors: {}
  };
  handleSubmit = e => {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      cpassword
    } = this.state;
    e.preventDefault();
    // New User Object
    const newUser = {
      firstname,
      lastname,
      username,
      email,
      password
    };
    if (cpassword === password) {
      // CALLING ACTIONS
      this.props.registeruser(newUser, this.props.history);
    } else {
      this.setState({
        // CALLING ERRORS
        errors: {
          type: "cpassword",
          msg: "Password doesn't match"
        }
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      cpassword,
      errors
    } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mt-5">
              <div className="card card-body bg-dark text-white">
                <h4 className="card-text">Register Form</h4>
                <form className="register-form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <InputField
                          type="text"
                          name="firstname"
                          value={firstname}
                          change={this.handleChange}
                          placeholder="Firstname"
                          errors={errors}
                        />
                      </div>
                      <div className="col">
                        <InputField
                          type="text"
                          name="lastname"
                          value={lastname}
                          change={this.handleChange}
                          placeholder="Lastname"
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <InputField
                      type="text"
                      name="username"
                      value={username}
                      change={this.handleChange}
                      placeholder="Username"
                      errors={errors}
                    />
                  </div>
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
                  <div className="form-group">
                    <InputField
                      type="password"
                      name="cpassword"
                      value={cpassword}
                      change={this.handleChange}
                      placeholder="Confirm your Password"
                      errors={errors}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Register
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
  { registeruser }
)(withRouter(Register));

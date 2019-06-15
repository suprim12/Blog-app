import React, { Component } from "react";
import PostInputField from "./PostInputField";
import { addpost } from "../../actions/postAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class CreatePost extends Component {
  state = {
    title: "",
    body: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    // New Title
    const postsData = {
      title: this.state.title,
      body: this.state.body
    };
    // ADDING POSTS
    this.props.addpost(postsData, this.props.history);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { title, body, errors } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h6 className="text-white mt-4">Add Posts</h6>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <PostInputField
                    type="text"
                    value={title}
                    placeholder="Title"
                    name="title"
                    errors={errors}
                    change={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="body"
                    value={body}
                    placeholder="Enter a body"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input type="file" className="form-control" />
                </div>
                <button type="submit" className="form-control btn-primary">
                  Add post
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { addpost }
)(withRouter(CreatePost));

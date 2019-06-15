import React, { Component } from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { get_posts } from "../../actions/postAction";
class Posts extends Component {
  componentDidMount() {
    this.props.get_posts();
  }
  render() {
    const posts = this.props.posts;
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            {posts &&
              posts.map(post => <PostItem posts={post} key={post._id} />)}
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(
  mapStateToProps,
  { get_posts }
)(Posts);

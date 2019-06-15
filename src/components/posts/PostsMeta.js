import React, { Component } from "react";
import { connect } from "react-redux";
import { likepost, dislikepost } from "../../actions/postAction";
class PostsMeta extends Component {
  handleLike = id => {
    // DISPATCH LIKE
    this.props.likepost(id);
  };
  handleDisLike = id => {
    this.props.dislikepost(id);
  };
  // FIND USER LIKE
  finduserlike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  // FIND USER DISLIKE
  finduserdislike(dislikes) {
    const { auth } = this.props;
    if (dislikes.filter(dislike => dislike.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { id, post } = this.props;
    return (
      <React.Fragment>
        <div className="meta">
          <span
            className="like-btn mr-3"
            onClick={this.handleLike.bind(this, id)}
          >
            <i
              className={
                this.finduserlike(post.likes)
                  ? "fas fa-thumbs-up mr-2"
                  : "far fa-thumbs-up mr-2"
              }
            />
            <span className="badge badge-pill badge-primary">
              {post.likes.length}
            </span>
          </span>
          <span
            className="unlike-btn"
            onClick={this.handleDisLike.bind(this, id)}
          >
            <i
              className={
                this.finduserdislike(post.dislikes)
                  ? "fas fa-thumbs-down mr-2"
                  : "far fa-thumbs-down mr-2"
              }
            />
            <span className="badge badge-pill badge-danger">
              {post.dislikes.length}
            </span>
          </span>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts.posts
});
export default connect(
  mapStateToProps,
  { likepost, dislikepost }
)(PostsMeta);

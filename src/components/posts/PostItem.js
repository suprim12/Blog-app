import React from "react";
import PostsMeta from "./PostsMeta";

export default function PostItem(props) {
  const { title, body, _id } = props.posts;
  return (
    <React.Fragment>
      <div className="card mb-4 bg-dark text-white">
        <div className="card-header">{title}</div>
        <img src="img/1.png" alt="post" className="card-img" />
        <div className="card-body">{body}</div>
        <div className="card-footer">
          <PostsMeta id={_id} post={props.posts} />
        </div>
      </div>
    </React.Fragment>
  );
}

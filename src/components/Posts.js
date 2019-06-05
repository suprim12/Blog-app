import React from "react";
import PostItem from "./PostItem";

export default function Posts() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
          <PostItem />
          <PostItem />
        </div>
        <div className="col-md-4" />
      </div>
    </div>
  );
}

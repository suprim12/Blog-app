import React from "react";

export default function PostItem() {
  return (
    <React.Fragment>
      <div className="card mb-4 bg-dark text-white">
        <div className="card-header">This is Post Title</div>
        <img src="img/1.png" alt="post" className="card-img" />
        <div className="card-body">This is a card body</div>
      </div>
    </React.Fragment>
  );
}

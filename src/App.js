import React from "react";
import Nav from "./components/Nav";
import PostItem from "./components/PostItem";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <PostItem />
            <PostItem />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

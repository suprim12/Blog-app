import React from "react";

export default function Nav() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md bg-dark p-1 navbar-dark"
        id="menu"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Blog App
            <span
              className="badge badge-pill badge-primary"
              style={{ fontSize: "0.75rem", marginLeft: "0.2rem" }}
            >
              MERN
            </span>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import "./nav.css";
function NavBar() {
  return (
    <div>
      <div className="item_nav_bar">
        <div>
        <h1 className="logo">
            Iron<span className="logosub">Core</span>
          </h1>
        </div>
        <div className="navitem">
          <div>
            <h3
              className="item_nav"
              onClick={() => (window.location.href = "/post")}
            >
              Create Post
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/")}
              className="item_nav"
            >
              Post
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Route, Routes } from "react-router";
import AddPost from "./Components/UploadePost/AddPost/AddPost";
import PostDetails from "./Components/UploadePost/PostDetails/PostDetails";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/post" element={<AddPost />} />
          <Route path="/" element={<PostDetails />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

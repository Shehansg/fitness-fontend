import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../NavBar/NavBar";
import { FaUserCircle } from "react-icons/fa";
import "../post.css";

function PostDetails() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/post");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="card_box_post">
        <div className="mrg">
          {posts.map((post) => (
            <div>
              <div key={post.id} className="card_details_card">
                <p className="title_post cn">{post.title}</p>
                <p className="descriptin_post"> {post.description}</p>
                {post.photos.map((photo, index) => (
                  <img
                    className="img_post_photo"
                    key={index}
                    src={`http://localhost:8080/uploads/${photo}`}
                    alt={`img ${index + 1}`}
                    onError={(e) => console.error("Error loading image:", e)}
                  />
                ))}
              </div>
              <div key={post.id} className="card_details_card">
                <p className="title_post cn">{post.title}</p>
                <p className="descriptin_post"> {post.description}</p>
                <video className="img_post_photo" loop controls>
                  <source
                    src={`http://localhost:8080/uploads/${post.video}`}
                    type="video/mp4"
                    onError={(e) => console.error("Error loading video:", e)}
                  />
                </video>
              </div>
            </div>
          ))}
        </div>
        {/*         
        <div className="mrg">
          {posts.map((post) => (
            
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default PostDetails;

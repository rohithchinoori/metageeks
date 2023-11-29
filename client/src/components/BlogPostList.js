import React, { useState, useEffect } from "react";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts
    fetch("https://jsonplaceholder.typicode.com/posts") // Assuming this endpoint returns the posts
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.post_id}>
              <h3>{post.title}</h3>
              <p>Author: {post.username}</p>
              <button>View Full Post</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPostList;

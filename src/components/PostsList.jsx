// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  // fetch("http://localhost://8080/posts")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setPosts(data.posts);
  //   });
const posts = useLoaderData()
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
      
  //     setPosts(responseData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   // setPosts([postData, ...posts]);
    
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }            

  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h3>Loading Post... </h3>
        </div>
      )} */}
    </>
  );
}

export default PostsList;

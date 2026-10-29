import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  // function showModalHandler() {
  //   setModalIsVisible(true);
  // }
  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }
  return (
    <>
      <Outlet />
      <main>
        <PostsList
        // isPosting={modalIsVisible}
        // onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const responseData = await response.json();
  return responseData.posts;
}

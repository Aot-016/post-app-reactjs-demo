import classes from "./PostsList.module.css";
import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

function PostsList({isPosting,onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  // let modalContent;
  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={authorChangeHandler}
  //       />
  //     </Modal>
  //   );
  // }
  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      {/* {modalIsVisible === true ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null} */}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Hassan" body="Reactjs awesome." />
      </ul>
    </>
  );
}

export default PostsList;

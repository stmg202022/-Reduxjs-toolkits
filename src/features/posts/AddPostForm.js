import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { nanoid } from "@reduxjs/toolkit";

import { selectAllUsers } from ".././users/userSlice";

import { postsAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(""); //This userId value is passed first to the postsSlice from here

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value); //values of userId come from Select Option value user.id

  const onSavePostClicked = () => {
    //title && content && userId && dispatch(postsAdded(title, content, userId));

    if (title && content && userId) {
      dispatch(postsAdded(title, content, userId));
    }

    setTitle("");
    setContent("");
    setUserId("");

    //we should have to work all the date on the postsSlice.js reducer page. so

    // if (title && content) {
    //   dispatch(
    //     postsAdded({
    //       id: nanoid(),
    //       title,
    //       content,
    //     })
    //   );
    // }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <h2>Add a New Posts</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <br />
        <br />

        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <br />
        <br />

        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />

        <br />
        <br />

        <button disabled={!canSave} type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;

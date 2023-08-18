import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../notesSlice";
import { addNoteContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const saveAddNotes = () => {
    if (title && content) {
      dispatch(
        addNote({
          id: nanoid(),
          title,
          content,
        })
      );

      // fungsinya biar state yang disini jadi kosong lagi
      setTitle("");
      setContent("");
      navigate("/");
    }
  };
  return (
    <section className={addNoteContainer}>
      <h1>Add a New Note</h1>
      <form className="form">
        <label htmlFor="postTitle" className="form--label">
          Note Title:
        </label>
        <input
          type="text"
          id="postTitle"
          className="form--input"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent" className="form--label">
          Content:
        </label>
        <textarea
          id="postContent"
          className="form--input_textarea"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" className="form--btn" onClick={saveAddNotes}>
          Save Note
        </button>
      </form>
    </section>
  );
};

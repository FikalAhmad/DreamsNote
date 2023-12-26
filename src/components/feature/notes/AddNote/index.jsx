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
  const createdAt = new Date().toLocaleDateString("id-ID");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const saveAddNotes = () => {
    if (title && content) {
      dispatch(
        addNote({
          id: nanoid(),
          title,
          content,
          createdAt,
        })
      );

      // fungsinya biar state yang disini jadi kosong lagi
      setTitle("");
      setContent("");
      navigate("/");
    }
  };
  console.log(createdAt);
  return (
    <div className={addNoteContainer}>
      <div className="addnote">
        <h1 className="heading-1">Add a New Note</h1>
        <form className="form">
          <label className="form--label">Note Title</label>
          <input
            type="text"
            id="postTitle"
            className="form--input"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label className="form--label">Content</label>
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
      </div>
    </div>
  );
};

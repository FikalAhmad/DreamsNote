import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../notesSlice";
import { useNavigate } from "react-router-dom";
import { Button, Text, TextInput, Textarea } from "@mantine/core";

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
    <div>
      {/* <div className="addnote">
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
      </div> */}
      <Text fz="32px" style={{ fontFamily: "PlusJakartaBold" }}>
        Add Note
      </Text>
      <form>
        <TextInput
          size="md"
          label="Note Title"
          placeholder="Input your title here"
        />
        <Textarea
          placeholder="Input your content here"
          label="Note Content"
          autosize
          minRows={5}
        />
        <Button fullWidth>Save Note</Button>
      </form>
    </div>
  );
};

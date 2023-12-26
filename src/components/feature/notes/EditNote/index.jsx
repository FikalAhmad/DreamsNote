import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { noteUpdated } from "../notesSlice";
import { EditNoteContainer } from "./styles";

export const EditNote = () => {
  const { noteId } = useParams();

  const note = useSelector((state) =>
    state.notes.find((note) => note.id === noteId)
  );

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(noteUpdated({ id: noteId, title, content }));
      navigate(`/notes/${noteId}`);
    }
  };

  return (
    <div className={EditNoteContainer}>
      <div className="editnote">
        <h1 className="heading-1">Edit Note</h1>
        <form className="form">
          <label className="form--label">Note Title</label>
          <input
            className="form--input"
            type="text"
            id="noteTitle"
            name="noteTitle"
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
          <label className="form--label">Content</label>
          <textarea
            className="form--input_textarea"
            id="noteContent"
            name="noteContent"
            value={content}
            onChange={onContentChanged}
          />
        </form>
        <button className="form--btn" type="button" onClick={onSavePostClicked}>
          Save Note
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { noteUpdated } from "../notesSlice";

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
    <section>
      <h2>Edit Note</h2>
      <form>
        <label htmlFor="noteTitle">Note Title:</label>
        <input
          type="text"
          id="noteTitle"
          name="noteTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="noteContent">Content:</label>
        <textarea
          id="noteContent"
          name="noteContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Note
      </button>
    </section>
  );
};

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ViewNoteContainer } from "./styles";

export const ViewNotes = () => {
  const { noteId } = useParams();

  const note = useSelector((state) =>
    state.notes.find((note) => note.id === noteId)
  );

  if (!note) {
    return (
      <section>
        <h2>Note not found!</h2>
      </section>
    );
  }

  return (
    <div className={ViewNoteContainer}>
      <div className="viewnote">
        <article className="post">
          <h1 className="heading-1">{note.title}</h1>
          <p className="post-content">{note.content}</p>
        </article>
      </div>
    </div>
  );
};

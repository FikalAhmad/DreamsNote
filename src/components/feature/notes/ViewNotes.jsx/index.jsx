import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const ViewNotes = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

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
    <section>
      <article className="post">
        <button onClick={() => navigate("/")}>back</button>
        <h2>{note.title}</h2>
        <p className="post-content">{note.content}</p>
      </article>
    </section>
  );
};

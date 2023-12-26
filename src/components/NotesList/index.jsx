import { useSelector } from "react-redux";
import Card from "../Card";
import { notesListContainer } from "./styles";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);

  const renderedNotes = () => {
    return notes.map((note) => (
      <div className="card--item" key={note.id}>
        <Card
          noteid={note.id}
          title={note.title}
          content={note.content}
          date={note.createdAt}
        />
      </div>
    ));
  };

  return (
    <div className={notesListContainer}>
      <div className="card--container">{renderedNotes()}</div>
    </div>
  );
};

export default NotesList;

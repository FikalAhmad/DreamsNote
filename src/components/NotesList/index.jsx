import { useSelector } from "react-redux";
import Card from "../Card";
import { notesListContainer } from "./styles";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);

  const renderedNotes = notes.map((note) => (
    <Card
      key={note.id}
      noteid={note.id}
      title={note.title}
      content={note.content}
    />
  ));

  return (
    <div className={notesListContainer}>
      <div className="card--container">{renderedNotes}</div>
    </div>
  );
};

export default NotesList;

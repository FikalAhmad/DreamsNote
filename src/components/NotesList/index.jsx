import { useSelector } from "react-redux";
import Card from "../Card";

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
    <div>
      <div className="card--container">{renderedNotes()}</div>
    </div>
  );
};

export default NotesList;

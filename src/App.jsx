import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "./Global.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { AddNote } from "./components/feature/notes/AddNote";
import { ViewNotes } from "./components/feature/notes/ViewNotes";
import { EditNote } from "./components/feature/notes/EditNote";
import { store } from "./components/feature/store/store";
import NotesList from "./components/NotesList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home page={<NotesList />} />} />
          <Route path="/addnotes" element={<Home page={<AddNote />} />} />
          <Route path="/notes/:noteId" element={<ViewNotes />} />
          <Route path="/editnotes/:noteId" element={<EditNote />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

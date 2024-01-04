import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "./Global.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { AddNote } from "./components/Feature/notes/AddNote";
import { ViewNotes } from "./components/Feature/notes/ViewNotes";
import { EditNote } from "./components/Feature/notes/EditNote";
import { store } from "./components/Feature/store/store";
import NotesList from "./components/NotesList";
import Pomodoro from "./components/Pomodoro";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home page={<NotesList />} />} />
          <Route path="/addnotes" element={<Home page={<AddNote />} />} />
          <Route
            path="/notes/:noteId"
            element={<Home page={<ViewNotes />} />}
          />
          <Route
            path="/editnotes/:noteId"
            element={<Home page={<EditNote />} />}
          />
          <Route path="/pomodoro" element={<Home page={<Pomodoro />} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

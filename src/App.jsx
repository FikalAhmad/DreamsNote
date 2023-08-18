import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Global/styles";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import { AddNote } from "./components/feature/notes/AddNote";
import { ViewNotes } from "./components/feature/notes/ViewNotes.jsx";
import { EditNote } from "./components/feature/notes/EditNote.jsx/index.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnotes" element={<AddNote />} />
          <Route path="/notes/:noteId" element={<ViewNotes />} />
          <Route path="/editnotes/:noteId" element={<EditNote />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

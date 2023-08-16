import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Global/styles";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import { AddNoteForm } from "./components/feature/notes/AddNote/addNotesForm";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnote" element={<AddNoteForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

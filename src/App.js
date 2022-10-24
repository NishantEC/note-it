import "./App.scss";
import Card from "./Components/Card/Card";
import { useState } from "react";
import NewNote from "./Components/Card/NewNoteCard";

function App() {
  const [Notes, setNotes] = useState([]);
  const [lastId, setLastId] = useState(Notes.length + 1);

  function addNewNote(newNote) {
    newNote.id = lastId;
    setLastId(lastId + 1);

    setNotes([...Notes, newNote]);
  }

  function handleDelete(id) {
    setNotes(Notes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
      <div className="header-wrapper">
        <p className="logo-head1">Note</p>
        <p className="logo-head2">it</p>
      </div>

        <NewNote addNewNote={(newNote) => addNewNote(newNote)} />
      <div className="cards-container">

        {Notes.map((note, index) => {
          return (
            <Card
              {...note}
              index={index}
              key={index}
              handleDelete={(id) => handleDelete(id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

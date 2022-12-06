import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my note',
      //color: color
    }
  ]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,   
      //color: color,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (<div className="display-notes">
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  </div>
  );

  
};

export default App;
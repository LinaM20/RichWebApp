import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('note') 
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => { 
    localStorage.setItem('note', JSON.stringify(notes));
  }, [notes])

  const addNote = (text, colour) => {
    const newNote = {
      id: nanoid(),
      text: text,   
      colour: colour
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);    
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  

  const editNote = (id) => {
    const newNotes = notes.filter((note) => note.id === id);  
    setNotes(newNotes);
  };

  return (
    <>
    <AddNote handleAddNote={addNote}/>
    <div className="display-notes">
      <NotesList notes={notes} handleDeleteNote={deleteNote} handleEditNote={editNote}/>
    </div>
    </>
    
  );
};

export default App;
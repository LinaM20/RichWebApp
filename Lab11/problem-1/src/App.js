import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: 'This is my note',
    //   //color: color
    // }
  ]);

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
  

  const editNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (<div className="display-notes">
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} handleEditNote={editNote}/>
  </div>
  );

  
};

export default App;
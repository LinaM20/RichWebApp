import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
    
    return (
        
    <div className="note-list">
        <AddNote handleAddNote={handleAddNote}/>
        {notes.map((note) => (
            <Note key={note.id} id={note.id} color={note.color} text={note.text} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
        ))}
    </div>
    );
};

export default NotesList;
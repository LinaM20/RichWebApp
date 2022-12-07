import AddNote from './AddNote';
import Note from './Note';


const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
    

    return (
        
    <div className="note-list">
        {notes.map((note) => (
            <Note id={note.id} text={note.text} color={note.color} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
    
    );
};

export default NotesList;
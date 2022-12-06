import AddNote from './AddNote';
import Note from './Note';


const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    

    return (
        
    <div className="note-list">
        {notes.map((note) => (
            <Note id={note.id} text={note.text} color={note.color} handleDeleteNote={handleDeleteNote}/>
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
    
    );
};

export default NotesList;
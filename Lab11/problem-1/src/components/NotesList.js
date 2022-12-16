import Note from './Note';

const NotesList = ({ notes, handleDeleteNote, handleEditNote }) => {
    
    return (
        
    <div className="note-list">
        {notes.map((note) => (
            <Note key={note.id} id={note.id} colour={note.colour} text={note.text} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
        ))}
    </div>
    );
};

export default NotesList;
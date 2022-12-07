const Note = ({id, text, handleDeleteNote, handleEditNote }) => {
    return (
        <div className="notes">
            <ul className="note">
                <p className="note-counter">Note {id}</p>
                <p className="message">{text}</p>
                <button onClick={() => handleEditNote(id)} className="edit">Edit Note</button>
                <button onClick={() => handleDeleteNote(id)} className="delete">Delete Note</button>
            </ul>
        </div>
    );
};

export default Note;

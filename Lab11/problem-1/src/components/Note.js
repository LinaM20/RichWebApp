const Note = ({id, colour, text, handleDeleteNote, handleEditNote }) => {
    return (
        <div className="notes">
            <ul className="note" style={{backgroundColor: colour}}>
                <p className="note-counter">Note</p>
                <p className="message">{text}</p>
                <button onClick={() => handleEditNote(id, text, colour)} className="edit">Edit Note</button>
                <button onClick={() => handleDeleteNote(id)} className="delete">Delete Note</button>
            </ul>
        </div>
    );
};

export default Note;

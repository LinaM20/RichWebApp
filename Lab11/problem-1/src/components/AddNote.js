import {useState} from 'react';
import React from "react";


const AddNote = ({handleAddNote}) => {
    const [colourValue, setColourValue] = useState("");
    const [noteText, setNoteText] = useState("");

    const handleChange = (event) => {
        setNoteText(event.target.value);
        setColourValue(event.target.value);
    }
    
    const handleSaveClick = () => {
        handleAddNote(noteText);
    }; 

    return (
        <div className="note-text">
                <h2 id="note-editor-title">Take Notes!</h2>
                <textarea onChange={handleChange} value={noteText} className="message" name="message" placeholder="Notes, notes, notes..."></textarea>
                <label>Colours</label>
                <select value={colourValue} onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="#F29f44">Orange</option>
                    <option value="#FFF5BA">Yellow</option>
                    <option value="#E7FFAC">Green</option>
                    <option value="#ACE7FF">Blue</option>
                    <option value="#D5AAFF">Purple</option>
                </select>
                <div id="add-button">
                    <button className="add-note-button" onClick={handleSaveClick}>Add Note</button>
                </div>
                <p>{colourValue}</p>
            </div>
    );
};



export default AddNote;


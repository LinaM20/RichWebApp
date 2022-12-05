showNotes();

//Click listener when user adds a note
let addBtn = document.getElementById("add-note-button");


function addNote() {

    let message = document.getElementById("message");
    let colour = document.getElementById("color");

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesArray = [];
      } else {
        notesArray = JSON.parse(notes);
    }

    let notesMessage = {
        text: message.value,
        colours: colour.value
    };
  
    notesArray.push(notesMessage);
    localStorage.setItem("notes", JSON.stringify(notesArray));

    message.value = "";
  
    showNotes();
}

//Show the notes in the notes section
function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesArray = [];
      } else {
        notesArray = JSON.parse(notes);
    }
  
    let html = "";
  
    notesArray.forEach(function(element, index) {
        html += ` <ul id="note" style="background-color: ${element.colours}">
		<p class="note-counter">Note ${index + 1}</p>
		<p class="message"> ${element.text}</p>
		<button id="${index}"onclick="deleteNote(this.id)" class="delete">Delete Note</button>
		<button id="${index}"onclick="editNote(this.id)" class="edit">Edit Note</button>
	</ul>`;
    });
  
    let notesElement = document.getElementById("notes");
    notesElement.innerHTML = html;

}

//Deleteing a note from local storage
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
  
    if (notes == null) {
        notesArray = [];
      } else {
        notesArray = JSON.parse(notes);
    }
  
    notesArray.splice(index, 1);
  
    localStorage.setItem("notes", JSON.stringify(notesArray));
  
    showNotes();
}

//Editing the notes
function editNote(index) {

    let notes = localStorage.getItem("notes");
    let message = document.getElementById("message");
    let colour = document.getElementById("color");

    if (notes == null) {
      notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }

    message.value = notesArray[index].text;
    colour.value = notesArray[index].colours;

    notesArray.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArray));

    showNotes();
	
}
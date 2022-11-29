const { fromEvent } = rxjs;

showNotes();
showChildNotes();

//Click listener when user adds a note

let addBtn = document.getElementById("add-note-button");
rxjs.fromEvent(addBtn, 'click')
    .subscribe(() => addNote()
);

let deleteBtn = document.getElementById("delete-note-button");
rxjs.fromEvent(deleteBtn, 'click')
    .subscribe(() => deleteNote(index)
);

let editBtn = document.getElementById("edit-note-button");
rxjs.fromEvent(editBtn, 'click')
    .subscribe(() => editNote(index)
);

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
    showChildNotes();
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
        <button id="${index}"onclick="addChildNote(this.id)" class="add">Add Child Note</button>
	</ul>`;
    });
  
    let notesElement = document.getElementById("notes");
    notesElement.innerHTML = html;
    console.log(notesArray);


}

//Deleteing a note from local storage
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    let childNotes = localStorage.getItem("child-notes");
  
    if (notes == null) {
        notesArray = [];
        childNotesArray = [];
      } else {
        notesArray = JSON.parse(notes);
        childNotesArray = JSON.parse(childNotes);
    }
  
    notesArray.splice(index, 1);
    childNotesArray.splice(index, 1);
  
    localStorage.setItem("notes", JSON.stringify(notesArray));
    localStorage.setItem("child-notes", JSON.stringify(childNotesArray));

  
    showNotes();
    showChildNotes();
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
    showChildNotes();
	
}

function addChildNote(index) {
    let message = document.getElementById("message");
    let colour = document.getElementById("color");

    let childNotes = localStorage.getItem("child-notes");

    if (childNotes == null) {
        childNotesArray = [];
      } else {
        childNotesArray = JSON.parse(childNotes);
    }

    let notesMessage = {
        text: message.value,
        colours: colour.value
    };
  
    childNotesArray.push(notesMessage);
    localStorage.setItem("child-notes", JSON.stringify(childNotesArray));

    message.value = "";
  
    showChildNotes();

}

function showChildNotes() {

    let childNotes = localStorage.getItem("child-notes");

    if (childNotes == null) {
        childNotesArray = [];
      } else {
        childNotesArray = JSON.parse(childNotes);
    }
  
    let html = "";
  
    childNotesArray.forEach(function(element, index) {
        html += ` <ul id="child-note" style="background-color: ${element.colours}">
		<p class="note-counter">Child note ${index + 1}</p>
		<p class="message"> ${element.text}</p>
		<button id="${index}"onclick="deleteChildNote(this.id)" class="delete">Delete Child Note</button>
		<button id="${index}"onclick="editNote(this.id)" class="edit">Edit Note</button>
        <button id="${index}"onclick="addChildNote(this.id)" class="add">Add Child Note</button>
	</ul>`;
    });
  
    let notesElement = document.getElementById("child-notes");
    notesElement.innerHTML = html;
    console.log("child");
    console.log(childNotesArray);
}

// function deleteChildNote(index) {

//     let childNotes = localStorage.getItem("child-notes");
  
//     if (notes == null) {
//         childNotesArray = [];
//       } else {
//         childNotesArray = JSON.parse(childNotes);
//     }
  
//     childNotesArray.splice(index, 1);
  
//     localStorage.setItem("child-notes", JSON.stringify(childNotesArray));
  
//     showNotes();
//     showChildNotes();
// }
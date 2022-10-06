// (function() {
// 	var noteApp = {
// 	  noteText: document.getElementById('note-text'),

// 	  message: document.getElementById('message'),
// 	  color: document.getElementById('color'),

// 	  addButton: document.getElementById('add-note-button'),
// 	  deleteButton: document.querySelector('.delete'),
// 	  editButton: document.querySelector('.edit'),
// 	  notesSection: document.getElementById('display-notes'),
// 	  notes: document.getElementById('notes'),
// 	  editMode: false,
  
// 	  init: function() {
// 		noteApp.addButton.addEventListener('click', noteApp.createNote);	
// 	  },

// 	  createNote: function() {
// 		var note = new Object();
// 		note.message = noteApp.message.value;
// 		note.color = noteApp.color.value;
// 		noteApp.addNote(note);
// 	  },

// 	  addNote: function(note) {
// 		var item = document.createElement('li'),
// 		deleteButton = document.createElement('span'),
// 		editButton = document.createElement('span'),
// 		message = document.createElement('span'),
// 		noteFooter = document.createElement('footer');
  
// 		deleteButton.className = 'delete';
// 		deleteButton.innerHTML = 'Delete';
// 		deleteButton.addEventListener('click', noteApp.deleteNote);

// 		message.className = 'note-message';
// 		message.innerHTML = note.message;
  
// 		editButton.className = 'edit';
// 		editButton.innerHTML = 'Edit';
// 		editButton.addEventListener('click', noteApp.editNote);
	  
// 		noteFooter.appendChild(editButton);
		
// 		item.className = note.color;
// 		item.appendChild(deleteButton);
// 		item.appendChild(message);
// 		item.appendChild(noteFooter);
  
// 		noteApp.notes.prepend(item);
  
// 		noteApp.message.value = '';
// 	  },
// 	  editNote: function() {
// 		var item;
// 		var message;
// 		var color;
// 		var note = new Object();
  
// 		item = this.parentNode.parentNode;
  
// 		for(var i = 0; i < item.childNodes.length; i++) {
// 		  if(item.childNodes[i].className === 'note-message') {
// 			message = item.childNodes[i].innerText;
// 		  }
// 		}
  
// 		color = item.getAttribute('class');
  
// 		note.message = message;
// 		note.color = color;
// 		noteApp.openNote(note);
  
// 		setTimeout(function() {
// 			item.remove();
// 		}, 200);
// 	  },
// 	  openNote: function(note) {
// 		if(!noteApp.editMode) {
// 			noteApp.noteText.classList.add('hide');
// 			noteApp.notesSection.classList.add('hide');
		
// 		  setTimeout(function() {
			
// 			noteApp.addButton.innerText = 'Done';
// 			noteApp.addButton.removeEventListener('click', noteApp.createNote);
// 			noteApp.addButton.addEventListener('click', noteApp.saveNote);
  
// 			noteApp.message.value = note.message;
// 			noteApp.color.value = note.color;
  
// 			noteApp.noteText.classList.remove('hide');
// 			noteApp.editMode = true;
// 		  }, 200);
// 		} else {
// 		  return;
// 		}  
// 	  },
// 	  saveNote: function() {
// 		noteApp.createNote();
  
// 		noteApp.noteText.classList.add('hide');
// 		noteApp.notesSection.classList.add('hide');
	  
// 		setTimeout(function() {
  
// 			noteApp.addButton.removeEventListener('click', noteApp.saveNote);
// 			noteApp.addButton.addEventListener('click', noteApp.createNote);
  
// 			noteApp.message.value = '';
  
// 			noteApp.notesSection.classList.remove('hide');
// 			noteApp.editMode = false;
// 		}, 200);
// 	  },    
// 	  deleteNote: function() {
// 		this.parentNode.remove();
// 	  }
// 	};
// 	noteApp.init();
//   })();


showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("add-note-button");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("message");

	let colours = document.getElementById("color");
    let BackgroundValue = colours.options[colours.selectedIndex].value;
    let noteCard = document.getElementById("notes");
    let colourNote = noteCard.style["background-color"] = BackgroundValue;	

    // let colourPicker = document.querySelector('option:checked');
    // console.log(colourPicker);

    let notes = localStorage.getItem("notes");



    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj), colourNote);

    addTxt.value = "";
  
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    let html = "";
  
    notesObj.forEach(function(element, index) {
        html += ` <ul id="note">
		<p class="note-counter">Note ${index + 1}</p>
		<p class="message"> ${element}</p>
		<button id="${index}"onclick="deleteNote(this.id)" class="delete">Delete Note</button>
		<button id="${index}"onclick="editNote(this.id)" class="edit">Edit Note</button>
	</ul>`;
    });
  
    let notesElm = document.getElementById("notes");
    notesElm.innerHTML = html;

}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    notesObj.splice(index, 1);
  
    localStorage.setItem("notes", JSON.stringify(notesObj));
  
    showNotes();
}


function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTxt = document.getElementById("message");
	// let colour = document.getElementById("color");



    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    console.log(notesObj);

    notesObj.findIndex((element, index) => {
      addTxt.value = element;
	//   colour.value = element;
    })

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

	
}
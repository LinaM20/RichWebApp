showContacts();

let addContactButton = document.getElementById("add-contact-button");

addContactButton.addEventListener("click", function() {

    let contactName = document.getElementById("name");
    let contactPhoneNumber = document.getElementById("number");
    let contactEmail = document.getElementById("email");


    let contacts = localStorage.getItem("contacts");

    if (contacts == null) {
        contactsArray = [];
      } else {
        contactsArray = JSON.parse(contacts);
    }

    let contactInfo = {
        name: contactName.value,
        number: contactPhoneNumber.value,
        email: contactEmail.value
    };
  
    if (validateForm() == true) {
        contactsArray.push(contactInfo);
        localStorage.setItem("contacts", JSON.stringify(contactsArray));
    }
    

    contacts.value = "";

  
    showContacts();
});

function showContacts() {

    
    let contacts = localStorage.getItem("contacts");

    if (contacts == null) {
        contactsArray = [];
      } else {
        contactsArray = JSON.parse(contacts);
    }
  
    let html = "";
  
    contactsArray.forEach(function(element, index) {
        html += `
        <table id="contacts">
            <tr id="table-headings">
                <th onclick="sortTable()">Name</th>
                <th>Mobile</th>
                <th>Email</th>
            </tr>
            <tr>
                <td id="contact-name">${element.name}</td>
                <td id="contact-phone-number">${element.number}</td>
                <td id="contact-email">${element.email}</td>
                <button id="${index}"onclick="deleteContact(this.id)" class="delete">Delete Note</button>
            </tr>
        </table>
            
       `;
    });
  
    let contactElement = document.getElementById("contacts");
    contactElement.innerHTML = html;
   
}

function deleteContact(index) {

    let contacts = localStorage.getItem("contacts");

    if (contacts == null) {
        contactsArray = [];
      } else {
        contactsArray = JSON.parse(contacts);
    }
  
    contactsArray.splice(index, 1);
  
    localStorage.setItem("contacts", JSON.stringify(contactsArray));
  
    showContacts();
}

function validateForm() {
    var name = document.forms.form.name.value;
    var email = document.forms.form.email.value;
	var phone = document.forms.form.number.value;

	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
	var regPhone=/^\d{10}$/;									
	var regName = /^[A-Za-z\s]*$/;		

	if (name == null || name == "", email == null || email == "", phone == null || phone == "") {

        let errorMessage = `<div id="error">ERROR: Please fill out fields</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
        return false;
    }

    if (!regName.test(name)) {
        //alphabet and space
        let errorMessage = `<div id="error">ERROR: Name has to be a letter or have a space</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
		return false;
	}
	if (!regEmail.test(email)) {
		//proper email
        let errorMessage = `<div id="error">ERROR: Email should have a valid email address</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
		return false;
	}	
    if (!regPhone.test(phone)) {
		//only numbers
        let errorMessage = `<div id="error">ERROR: Phone number should be valid</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
		return false;
	}

	return true;
}

function searchContact() {
    let search = document.getElementById("search");
    let filter = search.value.toUpperCase();
    let contacts = document.getElementById("contacts");
    li = contacts.getElementsByTagName("td");
    
    for (let i = 0; i < li.length; i++) {

        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sortTable() {

    let contactsTable, rows, doSwitch, i, row1, row2, switchRow;

    contactsTable = document.getElementById("contacts");
    doSwitch = true;
    
    while (doSwitch) {
        doSwitch = false;
        rows = contactsTable.rows;
      
        for (i = 1; i < (rows.length - 1); i++) {
            switchRow = false;
            row1 = rows[i];
            row2 = rows[i + 1];

            if (row1.innerHTML > row2.innerHTML) {
                switchRow = true;
                break;
            }
        }
        if (switchRow) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            doSwitch = true;
        }
    }

}

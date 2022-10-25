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
        contacts.value = "";
        showContacts();
    }
    
});

function showContacts() {

    let contacts = localStorage.getItem("contacts");

    if (contacts == null) {
        contactsArray = [];
      } else {
        contactsArray = JSON.parse(contacts);
    }

    tableContacts = document.getElementById("contacts");

    for(let i = 0; i < contactsArray.length; i++) {
        let tableRow = tableContacts.insertRow();
        let rowName = tableRow.insertCell();
        let rowNumber = tableRow.insertCell();
        let rowEmail = tableRow.insertCell();

        rowName.innerHTML = contactsArray[i].name;
        rowNumber.innerHTML = contactsArray[i].number;
        rowEmail.innerHTML = contactsArray[i].email;
    }
}

function validateForm() {
    var name = document.forms.form.name.value;
    var email = document.forms.form.email.value;
	var phone = document.forms.form.number.value;

	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
	var regPhone=/^\d{10}$/;									
	var regName = /^[A-Za-z\s]{1,20}$/;		

	if (name == null || name == "", email == null || email == "", phone == null || phone == "") {

        let errorMessage = `<div id="error">ERROR: Please fill out fields</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
        return false;
    }

    if (!regName.test(name)) {
        //alphabet and space
        let errorMessage = `<div id="error">ERROR: Name invalid: needs to be alphabetic and 20 characters or less</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
		return false;
	}
	if (!regEmail.test(email)) {
		//proper email
        let errorMessage = `<div id="error">ERROR: Email invalid: should be 40 characters or less</div>`;
        let errorDiv = document.getElementById("error");
        errorDiv.innerHTML = errorMessage;
		return false;
	}	
    if (!regPhone.test(phone)) {
		//only numbers
        let errorMessage = `<div id="error">ERROR: Phone number invalid: should be 10 digits</div>`;
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
    tableRow = contacts.getElementsByTagName("tr");
    let rowCount = 0;
    
    for (let i = 0; i < tableRow.length; i++) {

        tableData = tableRow[i].getElementsByTagName("td")[1];

        if (tableData) {
            txtValue = tableData.innerText;
            
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tableRow[i].style.display = "";
                
            } else {
                tableRow[i].style.display = "none";
                rowCount++;     

                if (rowCount == contactsArray.length) {
                    let errorMessage = `<div id="noResult">No results found</div>`;
                    let errorDiv = document.getElementById("noResult");
                    errorDiv.innerHTML = errorMessage;
                    return true;
                }  
            }
        }
    }
}

function sortTable() {

    let contactsTable;
    let rows;
    let doSwitch;
    let i;
    let row1;
    let row2;
    let switchRow;
    let switcher;
    let count= 0;

    contactsTable = document.getElementById("contacts");
    doSwitch = true;
    switcher = "ascending";
    
    while (doSwitch) {
        doSwitch = false;
        rows = contactsTable.rows;
      
        for (i = 1; i < (rows.length - 1); i++) {
            switchRow = false;
            row1 = rows[i];
            row2 = rows[i + 1];

            if (switcher == "ascending") {
                if (row1.innerHTML > row2.innerHTML) {
                    switchRow = true;
                    break;
                }
              } else if (switcher == "descending") {
                if (row1.innerHTML < row2.innerHTML) {
                    switchRow = true;
                    break;
                  }
              }
        }
        if (switchRow) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            doSwitch = true;
            count++; 
        } else {
            if (count == 0 && switcher == "ascending") {
                switcher = "descending";
                doSwitch = true;
            }
        }
    }

}

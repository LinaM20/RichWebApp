function validateForm() {
    let nameForm = document.forms["form"]["name"].value;
    let numberForm = document.forms["form"]["number"].value;

    if (nameForm == "") {
        alert("Name field must be filled out");
        return false;
    }
    else if (numberForm == "") {
        alert("Mobile field must be filled out");
        return false;
    }
    else {
        alert("Email field must be filled out");
        return false;
    }
}

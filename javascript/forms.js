function emailIsValid(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        alert("Email is Valid");
        return true;
    }
    else {
        alert("Email is Invalid")
        return false
    }

}

function nameChecker(firstname) {
    const letters = /^[A-Za-z\s]*$/;
    var n = firstname.value;
    if ((firstname.value.match(letters)) && n.length > 1) {
        alert("Valid First Name")
        return true
    }

    else {
        alert("Invalid First Name")
        return false
    }

}

function lastChecker(lastname) {
    const letters = /^[A-Za-z\s]*$/;
    var n = lastname.value;
    if ((lastname.value.match(letters)) && n.length > 1) {
        alert("Valid Last Name")
        return true
    }

    else {
        alert("Invalid Last Name")
        return false
    }

}

function clearResult() {
    document.getElementById("form").reset();
}
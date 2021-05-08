//////////////////
/// validation ///
//////////////////
//something that i need

function validation() {
    var email = document.forms["registration-form"]["email"].value;
    var fullName = document.forms["registration-form"]["full-name"].value;
    if(email == "" || fullName == "") {
        if(error == false) {
            var emptyInput = document.createElement("div");
            emptyInput.textContent = "Please enter both email and name";
            var registration = document.getElementById("rego-session");
            registration.insertBefore(emptyInput, document.getElementById("email"));
            error = true;
        }
    } else {
        console.log("Passed");
        sessionStorage.setItem("fullname", fullName);
        sessionStorage.setItem("email", email);
    }
}

var error = false;
document.getElementById("register-button").addEventListener("click", function() {validation();});

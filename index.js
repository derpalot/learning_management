/////////////////
/// slideshow ///
/////////////////
var slideShowImages = ["teaching.jpeg", "teachingOne.jpeg", "teachingTwo.jpeg", "teachingThree.jpeg"];
var index = 0;
var increment = 1;

function slideShow() {
    if (index == slideShowImages.length) {
        index = 0;
    }
    document.getElementById("main-pic").src = slideShowImages[index];
    index += increment;
}

function slideStart() {
    showStart = setInterval(    function() {
        slideShow();
    }, 3000);

}

if(document.getElementById("start-button") != null){ 
    document.getElementById("start-button").addEventListener("click", function() { 
        document.getElementById("centre-text").style.display = "none";
        document.getElementById("start-button").style.display = "none";
        if(index == slideShowImages.length) {
            index = 0;
        }
        document.getElementById("main-pic").src = slideShowImages[index++];
        document.getElementById("main-pic").style.opacity = 1;
        increment = 1;
        slideStart();
    });
}

if(document.getElementById("main-pic") != null){ 
    document.getElementById("main-pic").addEventListener("click", function() {
        if(increment = 1) {
            increment = 0;
            document.getElementById("main-pic").style.opacity = 0.8;
            clearInterval(showStart);
            document.getElementById("centre-text").style.display = "block";
            document.getElementById("start-button").style.display = "block";
        }
    });
}

///////////////////
/// testimonial ///
///////////////////
if (localStorage.length != 0) {
    var counter = localStorage.length;
} else {
    var counter = 0;
}

if(document.getElementById("testimonials-list")){
    for(var i = 0; i < counter; i++) {
        var text = document.createElement("li");
        text.textContent = localStorage.getItem(i);
        document.getElementById("testimonials-list").appendChild(text);
    }
}

function createTestimonial() { 
    var testimonial = document.createElement("li");
    var text = document.getElementById("testimonials-text").value;
    if (text == '') {
        return;
    }
    testimonial.textContent = text;
    localStorage.setItem(counter, text);
    document.getElementById("testimonials-list").appendChild(testimonial);
    document.getElementById("testimonials-text").value = '';
    counter++;
}

function removeTestimonial() {
    if (counter > 0){ 
        var testArray = document.getElementById("testimonials-list").getElementsByTagName("li");
        child = testArray[testArray.length -1];
        child.parentNode.removeChild(child);
        localStorage.removeItem(counter-1); 
        counter--;
    }
}

if(document.getElementById("write-testimonials") != null && document.getElementById("remove-testimonials") != null){
    document.getElementById("write-testimonials").addEventListener("click", function() {createTestimonial();});
    document.getElementById("remove-testimonials").addEventListener("click", function() {removeTestimonial();});
}

////////////////////
/// registration ///
////////////////////

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
        sessionStorage.clear();
        sessionStorage.setItem("fullname", fullName);
        sessionStorage.setItem("email", email);
        window.location.href = "index.html";
    }
}

var error = false;
if(document.getElementById("register-button") != null) {
    document.getElementById("register-button").addEventListener("click", function() {
        validation();});
}

if(sessionStorage.length != 0 && document.getElementById("index") != null) {
    if(sessionStorage.length == 3);
    else { 
        var success = document.createElement("div");   
        var closebtn = document.createElement("span");
        closebtn.innerHTML = "&times;";
        closebtn.id = "closebtn"
        success.id = "successRego"
        success.textContent = sessionStorage.getItem("fullname") + " you have successful registered your email: " + sessionStorage.getItem("email");
        var shown = true;
        sessionStorage.setItem("seen", shown);
        document.getElementById("index").insertBefore(success, document.getElementById("index").firstChild);
        success.appendChild(closebtn);
        closebtn.addEventListener("click", function() {
            successRego.style.display = "none";
            closebtn.stylye.display = "none";
        });
    }
}

////////////
/// Quiz ///
////////////

function validateForm() {

    var age = document.getElementById("age").value;
    sessionStorage.setItem("Age", null);

    var genderRadio = document.getElementsByName("gender");
    sessionStorage.setItem("Gender", null);

    var tutorRadio = document.getElementsByName("tutoringType");
    sessionStorage.setItem("Tutor", null);

    var subjectsRadio = document.getElementsByName("subjects");
    var counter = 0;

    var otherSubjects = document.getElementById("otherSubjects");

    var education = document.getElementById("education").value;
    sessionStorage.setItem("Education", education);

    if(otherSubjects.value == "") {
        sessionStorage.setItem("otherSubjects", null);
    } else {
        console.log(otherSubjects.value);
        sessionStorage.setItem("otherSubjects", otherSubjects.value);
    }
    for(var i = 0; i < genderRadio.length; i++) {
        if(genderRadio[i].checked) {
            sessionStorage.setItem("Gender", genderRadio[i].value);
            break;
        }
    }

    for(var i = 0; i < tutorRadio.length; i++) {
        if(tutorRadio[i].checked) {
            sessionStorage.setItem("Tutor", tutorRadio[i].value);
            break;
        }
    }

    for(var i = 0; i < subjectsRadio.length; i++) {
        if(subjectsRadio[i].checked) {
            sessionStorage.setItem(counter, subjectsRadio[i].value);
            counter++;
        }
    }

    sessionStorage.setItem("counter", counter);

    if(age =="" || isNaN(age) || (age > 80) || (age < 1)) {
        if(ageError == false) {
            var invalidInput = document.createElement("div");
            invalidInput.textContent = "Please insert a valid age";
            var question = document.getElementById("form-inner");
            question.insertBefore(invalidInput, (document.getElementById("age")));
            ageError = true;
            invalidInput.id = "invalid";
        }
    } else{ 
        if(ageError == true) {
            document.getElementById("invalid").remove();
            ageError = false;
        }
        sessionStorage.setItem("Age", age);
    }

    if(sessionStorage.getItem("Gender") == "null") {
        if(genderError == false) {
            var invalidInput = document.createElement("div");
            invalidInput.textContent = "Please select a gender";
            var question = document.getElementById("radioGender");
            question.insertBefore(invalidInput, question.firstChild); 
            genderError = true;
        }
    } else if(genderError == true) {
        document.getElementById("radioGender").firstChild.remove();
        genderError = false;
    }

    if( sessionStorage.getItem("Tutor")== "null") {
        if( tutorError == false) {
            var invalidInput = document.createElement("div");
            invalidInput.textContent = "Please select your preference";
            var question = document.getElementById("radioTutor");
            question.insertBefore(invalidInput, question.firstChild); 
            tutorError = true;
        }
    } else if(tutorError == true) {
        document.getElementById("radioTutor").firstChild.remove();
        tutorError = false;
    }

    if(counter == 0 && sessionStorage.getItem("otherSubjects")== "null") {
        if( subjectError == false) {
            var invalidInput = document.createElement("div");
            invalidInput.textContent = "Please select your subjects";
            var question = document.getElementById("subjectCheck");
            question.insertBefore(invalidInput, question.firstChild); 
            subjectError = true;
        }
    } else if(subjectError == true) {
        document.getElementById("subjectCheck").firstChild.remove();
        subjectError = false;
    }
}

var ageError = false;
var genderError = false;
var tutorError = false;
var subjectError = false;

if(document.getElementById("quiz-submit") != null) {
    sessionStorage.clear();
    document.getElementById("quiz-submit").addEventListener("click", function() {
        validateForm();
        if(sessionStorage.getItem("Tutor") != "null" && sessionStorage.getItem("Gender") != "null" && sessionStorage.getItem("Age")!= "null" &&  (sessionStorage.getItem("otherSubjects") != "null" || parseInt(sessionStorage.getItem("counter")) != 0)){
            window.location.href = "response.html"; 
        }
    });
}

////////////////
/// response ///
////////////////
if(document.getElementById("response-list") != null) {
    counter = parseInt(sessionStorage.getItem("counter"));
    answerArray = ["Age", "Gender", "Education", "Tutor"];
    for(var i in answerArray) {
        var answer = document.createElement("li");
        answer.textContent = answerArray[i] + ": " + sessionStorage.getItem(answerArray[i]);
        document.getElementById("response-list").appendChild(answer);
    }
    var subject =  document.createElement("li");
    subject.textContent = "Subjects: ";
    if(counter != 0) {
        for(var i = 0; i < counter; i ++){
            subject.textContent += sessionStorage.getItem(i) + " ";  
        }
        if(sessionStorage.getItem("otherSubjects") != "null") {
            subject.textContent += sessionStorage.getItem("otherSubjects");
        }
    }
    document.getElementById("response-list").appendChild(subject);

}

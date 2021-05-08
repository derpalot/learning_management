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

for(var i = 0; i < counter; i++) {
    var text = document.createElement("li");
    text.textContent = localStorage.getItem(i);
    document.getElementById("testimonials-list").appendChild(text);
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

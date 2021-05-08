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

document.getElementById("main-pic").addEventListener("click", function() {
    if(increment = 1) {
        increment = 0;
        document.getElementById("main-pic").style.opacity = 0.8;
        clearInterval(showStart);
        document.getElementById("centre-text").style.display = "block";
        document.getElementById("start-button").style.display = "block";
    }
});

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

document.getElementById("write-testimonials").addEventListener("click", function() {createTestimonial();});
document.getElementById("remove-testimonials").addEventListener("click", function() {removeTestimonial();});

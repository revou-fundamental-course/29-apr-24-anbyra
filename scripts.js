let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = 1;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(name == "" || email == "" || message == "") {
        alert("All fields are required!");
        return false;
    }
    return true;
}

function sendEmail() {
    Email.send({
        SecureToken : "87b267a6-d9dd-4865-877f-143960ae4a68", 
        To : "contacthuzaifahahmad62@gmail.com",
        From : "huzaifahahmad62@gmail.com",
        Subject : document.getElementById("contact-subject").value,
        Body: "Name: " + document.getElementById("contact-name").value 
        + "<br> Email: " + document.getElementById("contact-email").value 
        + "<br> Subject: " + document.getElementById("contact-subject").value 
        + "<br> Message: " + document.getElementById("contact-message").value
    }).then(
    message => alert(message)
    );
}   




let menuBtn = document.querySelector(".hamburger")
let mobileMenu = document.querySelector(".mobile-nav")
let mobileBtns = document.querySelector(".mobile-btns")
let isMenuDisplayed = false

menuBtn.addEventListener("click", function() {
    isMenuDisplayed = true
    if (isMenuDisplayed) {
        menuBtn.classList.toggle("is-active")
        mobileMenu.classList.toggle("is-active")
        document.documentElement.style.overflowY = 'hidden';   
    }
})

mobileBtns.addEventListener("click", function() {
    isMenuDisplayed = false
    if (isMenuDisplayed === false) {
        menuBtn.classList.remove("is-active")
        mobileMenu.classList.remove("is-active")
        document.documentElement.style.overflowY = 'visible';   
    }
})
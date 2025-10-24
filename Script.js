const Modal = document.querySelector(".modal");
const Overlay = document.querySelector(".overlay");

function OpenModal() {
    console.log(Modal);
    Modal.classList.add("active");
    Overlay.classList.add("overlayactive");
}

function CloseModal() {
    Modal.classList.remove("active");
    Overlay.classList.remove("overlayactive");
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeToggle.innerHTML = "🌙";
    } else {
        themeToggle.innerHTML = "☀️";
    }
});
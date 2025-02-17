function toggleMenu() {
    let menu = document.querySelector(".menu-items");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function showExercise(exerciseId) {
    document.querySelectorAll(".section").forEach(section => section.style.display = "none");
    document.getElementById(exerciseId).style.display = "block";
}

function toggleMenu() {
    let menu = document.querySelector(".menu-items");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function showExercise(exerciseId) {
    document.querySelectorAll(".section").forEach(section => section.style.display = "none");
    document.getElementById(exerciseId).style.display = "block";
}

function showImage() {
    let input = document.getElementById("transport").value.toLowerCase();
    let img = document.getElementById("transportImg");
    let images = {
        "bike": "images/bike.png",
        "scooter": "images/scooter.jpg",
        "car": "images/car.png",
        "skateboard": "images/skateboard.jpg"
    };
    img.src = images[input] || "";
    img.style.display = img.src ? "block" : "none";
}

function handleEnter(event) {
    if (event.key === "Enter") {
        showImage();
    }
}

function changeColor(color) {
    document.querySelector(".heart").style.color = color;
}
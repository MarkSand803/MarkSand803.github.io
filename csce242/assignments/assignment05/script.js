function addHello(element) {
    let helloText = element.querySelector("#hello-text");
    let newHello = document.createElement("div");
    newHello.textContent = "hello";
    helloText.appendChild(newHello);
}

function changeStarColor() {
    let color = document.getElementById("colorPicker").value;
    document.querySelector(".star").style.color = color;
}

function changeImage() {
    let img = document.getElementById("changeableImage");
    img.src = img.src.includes("image1.jpg") ? "images/image2.jpg" : "images/image1.jpg";
}
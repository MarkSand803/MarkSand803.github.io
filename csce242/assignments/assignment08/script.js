const images = {
    "Happy Birthday": "images/birthday.jpg",
    "Crazy Clown": "images/clown.jpg",
    "It's Raining": "images/rain.jpg",
    "Quiet Time": "images/read.jpg",
    "Working Hard": "images/shovel.jpg",
    "Work from Home": "images/work.jpg"
};

const titlesDiv = document.getElementById("titles");

for (let title in images) {
    let div = document.createElement("div");
    div.className = "title";
    div.innerText = title;
    div.onclick = function() { openPopup(title, images[title]); };
    titlesDiv.appendChild(div);
}

function openPopup(title, imageSrc) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-image").src = imageSrc;
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
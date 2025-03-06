function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function toggleDetails(element) {
    const details = element.querySelector('.details');
    details.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://marksand803.github.io/csce242/data.json")
        .then(response => response.json())
        .then(data => displayGallery(data))
        .catch(error => console.error("Error loading JSON:", error));
});

function displayGallery(items) {
    const galleryGrid = document.querySelector(".gallery-grid");
    galleryGrid.innerHTML = ""; // Clear existing HTML

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("gallery-item");
        div.onclick = () => openModal(item);

        div.innerHTML = `
            <img src="${item.img_name}" alt="${item.title}">
            <p><strong>${item.title}</strong></p>
            <p>${item.location}</p>
            <p>${item.name}</p>
            
        `;

        galleryGrid.appendChild(div);
    });
}

function openModal(item) {
    document.getElementById("modal-title").textContent = item.title;
    document.getElementById("modal-location").textContent = item.location;
    document.getElementById("modal-description").textContent = `${item.name} - ${item.date}`;


    document.getElementById("modal-image").src = item.img_name;
    document.getElementById("modal-image").alt = item.title;
    
    const detailsDiv = document.getElementById("modal-images");
    detailsDiv.innerHTML = item.details.map(detail => `<p>${detail}</p>`).join("");

    document.getElementById("photoModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}


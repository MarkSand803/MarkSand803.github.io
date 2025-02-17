function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function toggleDetails(element) {
    const details = element.querySelector('.details');
    details.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("full-calendar");
    let today = new Date();
    let year = today.getFullYear();
    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let calendarHTML = "<div class='calendar-container'>";
    months.forEach((month, index) => {
        calendarHTML += `<div class='calendar-month'>
            <h3>${month} ${year}</h3>
            <button class='view-times' data-month='${index + 1}'>View Available Times</button>
        </div>`;
    });
    calendarHTML += "</div>";

    calendarDiv.innerHTML = calendarHTML;

    document.querySelectorAll(".view-times").forEach(button => {
        button.addEventListener("click", function () {
            let selectedMonth = this.dataset.month;
            window.location.href = `available_times.html?month=${selectedMonth}`;
        });
    });
});
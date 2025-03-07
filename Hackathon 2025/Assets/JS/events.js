document.addEventListener("DOMContentLoaded", function () {
    // Get department name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const dept = urlParams.get("dept");

    // Reference elements
    const deptTitle = document.getElementById("dept-title");
    const eventContainer = document.getElementById("event-container");

    // Sample event data (You can fetch this from Firebase later)
    const eventData = {
        "CSE": [
            { title: "AI Workshop", date: "April 5, 2025", host: "CSE Dept" },
            { title: "Hackathon", date: "May 1, 2025", host: "CSE Dept" }
        ],
        "ME": [
            { title: "Mechanical Expo", date: "April 15, 2025", host: "ME Dept" },
            { title: "AutoCAD Workshop", date: "May 10, 2025", host: "ME Dept" }
        ],
        "MBA": [
            { title: "Business Plan Contest", date: "April 10, 2025", host: "MBA Dept" },
            { title: "Leadership Seminar", date: "May 20, 2025", host: "MBA Dept" }
        ],
        "EEE": [
            { title: "Electrical Innovations", date: "April 25, 2025", host: "EEE Dept" }
        ],
        "CIVIL": [
            { title: "Smart Cities Conference", date: "May 5, 2025", host: "CIVIL Dept" }
        ],
        "ISE": [
            { title: "Data Science Workshop", date: "May 15, 2025", host: "ISE Dept" }
        ]
    };

    // Check if department exists in data
    if (dept && eventData[dept]) {
        deptTitle.textContent = `📌 Events in ${dept} Department`;

        eventData[dept].forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>Hosted by: ${event.host}</p>
                <p>Date: ${event.date}</p>
            `;
            eventContainer.appendChild(eventCard);
        });
    } else {
        deptTitle.textContent = "No Events Found";
        eventContainer.innerHTML = "<p>No events are scheduled for this department.</p>";
    }
});

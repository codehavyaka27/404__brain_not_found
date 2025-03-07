document.addEventListener("DOMContentLoaded", function () {
  const eventContainer = document.getElementById("events-container");

  // Show loading message
  eventContainer.innerHTML = "<p>Loading events...</p>";

  // Fetch event data from JSON file
  fetch("events.json")
      .then(response => response.json())
      .then(data => {
          eventContainer.innerHTML = ""; // Clear loading message

          if (data.length === 0) {
              eventContainer.innerHTML = "<p>No upcoming events found.</p>";
              return;
          }

          data.forEach(event => {
              const eventCard = document.createElement("div");
              eventCard.classList.add("event-card");
              eventCard.innerHTML = `
                  <h3>${event.title}</h3>
                  <p>📅 ${event.date} | 🕒 ${event.time}</p>
                  <p>📍 ${event.location}</p>
              `;
              eventContainer.appendChild(eventCard);
          });
      })
      .catch(error => {
          console.error("Error loading events:", error);
          eventContainer.innerHTML = "<p>Failed to load events. Please try again later.</p>";
      });
});

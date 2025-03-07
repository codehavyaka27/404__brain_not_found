// Leaderboard data
const leaderboardData = [
  { rank: 1, name: "Sumanth", score: 98, department: "Computer Science" },
  { rank: 2, name: "Sourav", score: 95, department: "Mechanical Engineering" },
  { rank: 3, name: "Milin", score: 92, department: "Electronics" },
  { rank: 4, name: "Aditya", score: 89, department: "Civil Engineering" },
  { rank: 5, name: "Rahul", score: 87, department: "Electrical Engineering" },
  { rank: 6, name: "Siddharth", score: 84, department: "Computer Science" },
  { rank: 7, name: "Kavya", score: 80, department: "Mechanical Engineering" },
  { rank: 8, name: "Arjun", score: 78, department: "Electronics" },
];

// Populate leaderboard table
function populateLeaderboard(data) {
  const tableBody = document.getElementById("leaderboard-body");

  tableBody.innerHTML = "";
  data.forEach((item) => {
      const row = document.createElement("tr");

      if (item.rank === 1) row.classList.add("highlight");

      row.innerHTML = `
          <td>${item.rank}</td>
          <td>${item.name}</td>
          <td>${item.score}</td>
          <td>${item.department}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Filter leaderboard by department
function filterByDepartment(department) {
  if (department === "all") {
      populateLeaderboard(leaderboardData);
  } else {
      const filteredData = leaderboardData.filter((item) => item.department === department);
      populateLeaderboard(filteredData);
  }
}

// Show top participants
function showTopParticipants() {
  const topData = leaderboardData.slice(0, 3);
  populateLeaderboard(topData);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  populateLeaderboard(leaderboardData);

  document.getElementById("filter-department").addEventListener("change", (e) => {
      filterByDepartment(e.target.value);
  });

  document.getElementById("show-top-participants").addEventListener("click", showTopParticipants);
});

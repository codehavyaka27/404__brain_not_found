document.getElementById('profile-img').addEventListener('click', function(event) {
    event.preventDefault();
    var dropdownContent = document.querySelector('.profile .dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
  
  // Optional: Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    var dropdownContent = document.querySelector('.profile .dropdown-content');
    var profileImg = document.getElementById('profile-img');
  
    if (!profileImg.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
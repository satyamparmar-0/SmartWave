// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  
  // Close the popup when clicking outside of it
  window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
  
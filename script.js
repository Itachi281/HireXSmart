function openPopup() {
    document.getElementById("popupForm").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
  }
  
  // Close the pop-up form if the user clicks outside of it
  window.onclick = function(event) {
    var popup = document.getElementById("popupForm");
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
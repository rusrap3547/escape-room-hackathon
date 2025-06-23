// This is for the starting message
window.onload = () => {
  const popup = document.getElementById('centerPopupMessage');
  // Check if the popup has been shown before
  if (!localStorage.getItem('popupShown')) {
    // Show the popup with transition
    setTimeout(() => {
      popup.classList.add('show');
    }, 500);
    popup.addEventListener('click', () => {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    });
    // Set a flag in local storage to indicate that the popup has been shown
    localStorage.setItem('popupShown', 'true');
  } else {
    popup.style.display = 'none';
  }
};

// Calender Popup - Activation
document.querySelector('.popup').addEventListener('click', calenderPopup);
function calenderPopup(event) {
  event.stopPropagation(); // Prevent bubbling
  const popup = document.getElementById('myCalenderPopup');
  const isVisible = popup.style.display === 'block';
  popup.style.display = isVisible ? 'none' : 'block';
  
  // Close popup if user clicks anywhere outside
  function closeOnOutsideClick(e) {
    if (!event.currentTarget.contains(e.target)) {
      popup.style.display = 'none';
      document.removeEventListener('click', closeOnOutsideClick);
    }
  }
  if (!isVisible) {
    setTimeout(() => {
      document.addEventListener('click', closeOnOutsideClick);
    }, 0);
  }
}


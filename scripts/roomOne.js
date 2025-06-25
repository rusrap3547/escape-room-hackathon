// This is for the starting message
window.onload = () => {
  const popup = document.getElementById('centerPopupMessage');
  popup.classList.add('show');
  popup.addEventListener('click', () => {
    popup.classList.remove('show');
  });
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


document.addEventListener('DOMContentLoaded', () => {
  const lockpopup = document.getElementById('padlockPopup');
  const padlockIcon = document.getElementById('padlockIcon');
  const closePopup = document.getElementById('closePopup');
  const submitCombo = document.getElementById('submitCombo');
  const correctCombo = ['1','7','2','4'];
  let isDoorUnlocked = false;

  const dials = [
    document.getElementById('dial1'),
    document.getElementById('dial2'),
    document.getElementById('dial3'),
    document.getElementById('dial4')
  ];

  dials.forEach((dial) => {
    for (let i = 0; i <= 9; i++){
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      dial.appendChild(option);
    }
  });

  padlockIcon.addEventListener('click', () => {
    lockpopup.style.display = 'flex';
  });

  closePopup.addEventListener('click', () => {
    lockpopup.style.display = 'none';
  });

  document.getElementById('doorToHallway').addEventListener('click',(e) => {
    if (!isDoorUnlocked) {
      e.preventDefault();
      alert("The door is locked, you can't get out!");
    } else {
      window.location.href = "../Hall-Way/hallWay.html";
    }
  });

  // Submit combination
  submitCombo.addEventListener('click', () => {
    const entered = dials.map(d => d.value);
    if (entered.join('') === correctCombo.join('')) {
      alert('Unlocked!');
      lockpopup.style.display = 'none';
      padlockIcon.textContent = '🔓';
      isDoorUnlocked = true;
      // Additional: trigger door animation or unlock behavior here
    } else {
      alert('Incorrect combination!');
    }
  });
});


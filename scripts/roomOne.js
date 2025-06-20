// This is for the starting message
  window.onload = () => {
    const popup = document.getElementById('centerPopupMessage');
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

// Setting up Ambiance
function startUpMusic() {
 document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');

    // Start playing music after the first user interaction
    const startMusic = () => {
      music.volume = 0.5; // optional: set background volume
      music.play().catch(err => console.log('Autoplay blocked:', err));
      document.removeEventListener('click', startMusic);
    };
    document.addEventListener('click', startMusic);
  });
};
startUpMusic();

//Music for other rooms
function playBackgroundMusic(volume = 0.5) {
  const music = document.getElementById('backgroundMusic');
  if (!music) {
    console.warn('No #backgroundMusic element found.');
    return;
  }
  music.loop = true;
  music.volume = volume;
  if (music.paused) {
    const playAttempt = music.play();
    if (playAttempt instanceof Promise) {
      playAttempt.catch(err => {
        console.warn('Autoplay prevented:', err.message);
      });
    };
  };
};

function playBackgroundMusic() {
  const music = document.getElementById('backgroundMusic');
  if (music) {
    music.play().catch((err) => {
      console.warn('Autoplay blocked or error occurred:', err);
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const arrowElements = document.querySelectorAll('.stoneArrows');

  arrowElements.forEach((element) => {
    element.addEventListener('click', playBackgroundMusic, { once: true });
  });
});
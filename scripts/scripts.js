const enterButton = document.getElementById('enterTransitionButton');
const fadeOverlay = document.getElementById('screenFadeOverlay');
const soundEffect = document.getElementById('transitionSoundEffect');

    enterButton.addEventListener('click', (e) => {
      e.preventDefault();
      soundEffect.play();                  // Play the transition sound
      fadeOverlay.style.opacity = 1;       // Begin fade to black
      setTimeout(() => {
        window.location.href = 'northWall.html'; // Navigate after fade
      }, 2000);
    });

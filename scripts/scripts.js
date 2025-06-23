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


function setupFootstepSound() {
  const footSteps = document.getElementById('footSteps');
  const arrowImages = document.querySelectorAll('.stoneArrows');
  console.log("Starting Footsteps");
  arrowImages.forEach(img => {
    img.addEventListener('click', () => {
      try {
        footSteps.pause();
        footSteps.currentTime = 0;
        footSteps.play();
      } catch (err) {
        console.warn('Footstep sound error:', err);
      }
    });
  });
}


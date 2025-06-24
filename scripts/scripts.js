const enterButton = document.getElementById("enterTransitionButton");
const fadeOverlay = document.getElementById("screenFadeOverlay");
const soundEffect = document.getElementById("transitionSoundEffect");

enterButton.addEventListener("click", (e) => {
  e.preventDefault();
  soundEffect.play(); // Play the transition sound
  fadeOverlay.style.opacity = 1; // Begin fade to black
  setTimeout(() => {
    window.location.href = "northWall.html"; // Navigate after fade
  }, 2000);
});

function setupFootstepSound() {
  const footSteps = document.getElementById("footSteps");
  const arrowImages = document.querySelectorAll(".stoneArrows");
  console.log("Starting Footsteps");
  arrowImages.forEach((img) => {
    img.addEventListener("click", () => {
      try {
        footSteps.pause();
        footSteps.currentTime = 0;
        footSteps.play();
      } catch (err) {
        console.warn("Footstep sound error:", err);
      }
    });
  });
}

// Sparkle Trail Cursor
document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'unicornSparkle';

  // Random pastel color
  const pastelColors = ['#ffb3f6', '#b3f0ff', '#ffd1b3', '#e0b3ff', '#b3ffcc'];
  const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  sparkle.style.backgroundColor = color;

  // Random position offset for floaty feel
  const offsetX = (Math.random() - 0.5) * 10;
  const offsetY = (Math.random() - 0.5) * 10;

  sparkle.style.left = `${e.clientX + offsetX}px`;
  sparkle.style.top = `${e.clientY + offsetY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700); // sparkle duration
});
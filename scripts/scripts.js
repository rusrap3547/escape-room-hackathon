const enterButton = document.getElementById("enterTransitionButton");
const fadeOverlay = document.getElementById("screenFadeOverlay");
const soundEffect = document.getElementById("transitionSoundEffect");

if (enterButton && fadeOverlay && soundEffect) {
  const firstLevelChange = enterButton.getAttribute("href");
}

if (enterButton) {
  enterButton.addEventListener("click", (e) => {
    e.preventDefault();
    soundEffect.play(); // Play the transition sound
    fadeOverlay.style.opacity = 1; // Begin fade to black
    setTimeout(() => {
      window.location.href = "/Room-One/northWall.html";
    }, 2000);
  });
}


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

let isPowerOn = true; // Power defaults to ON
let hasScrewdriver = false;

try {
  hasScrewdriver = JSON.parse(localStorage.getItem('hasScrewdriver')) === true;
} catch (e) {
  console.warn('Could not read hasScrewdriver from localStorage:', e);
}

// This is going to be for the opening of the vent
function tryToOpenVent() {
  console.log('Attempting to open the vent...');

  if (!hasScrewdriver) {
    console.log('FAILED: No screwdriver.');
    alert('You need a screwdriver to open this vent.');
    return;
  }

  console.log('SUCCESS: Screwdriver detected.');
  
  const screws = [
    document.getElementById('topLeftScrew'),
    document.getElementById('topRightScrew'),
    document.getElementById('bottomLeftScrew'),
    document.getElementById('bottomRightScrew')
  ];

  const ventCover = document.getElementById('airVentOpening');

  screws.forEach((screw, index) => {
    setTimeout(() => {
      if (screw) screw.style.opacity = '0';
    }, index * 250);
  });

  setTimeout(() => {
    ventCover.classList.add('ventDropped');

    const hiddenSwitch = document.getElementById('hiddenSwitch');
    if (hiddenSwitch) hiddenSwitch.style.display = 'block';

    console.log('Vent dropped and switch revealed.');
  }, 1200);
}

// Function for the power toggle
function togglePowerSwitch() {
  console.log('Toggling the power switch...');

  isPowerOn = !isPowerOn;

  const exitLight = document.getElementById('flashingExitLight');
  if (exitLight) {
    exitLight.classList.toggle('blinkingLight', isPowerOn);
  }

  console.log(`Power is now ${isPowerOn ? 'ON' : 'OFF'}.`);
  alert(isPowerOn ? 'The power is back on.' : 'You hear a click — the magnetic lock is off.');
}

//function for the door opening
function tryToOpenDoor() {
  console.log('Attempting to open the door...');

  if (isPowerOn) {
    alert('The door has a magnetic lock. It won’t budge.');
    console.log('FAILED: Power is still ON.');
  } else {
    alert('You open the door and escape!');
    console.log('SUCCESS: Door opened.');
    window.location.href = '../CongratsPage/congratsPage.html'
  }
}


// setting up the listeners to wait for the clicks
document.addEventListener('DOMContentLoaded', () => {
  // Hook up click listeners
  document.getElementById('airVentOpening')?.addEventListener('click', tryToOpenVent);
  document.getElementById('hiddenSwitch')?.addEventListener('click', togglePowerSwitch);
  document.getElementById('exitDoor')?.addEventListener('click', tryToOpenDoor);
});



const scaryMessages = [
  'Did you hear that?',
  'He’s right behind you.',
  'Why did you come here?',
  'Something is watching...',
  'Don’t turn around.',
  'This door was supposed to be locked.',
  'It moved again.',
  'You’re not supposed to be in here.',
  'The lights won’t help.',
  'He knows your name.',
  'There’s blood under the door.',
  'You were warned.',
  'It’s in the walls.',
  'That shadow wasn’t there before.',
  'Stop reading this.',
  'You’re not alone.',
  'Do you feel that?',
  'He’s inside the room now.',
  'It’s too late to run.',
  'Close your eyes. It’s safer.',
  'Something just blinked in the mirror.',
  'They hear everything.',
  'It’s learning your patterns.',
  'Your time is running out.',
  'There’s something under the bed.',
  'You locked the door… didn’t you?',
  'That wasn’t the wind.',
  'You shouldn’t have clicked that.',
  'It remembers you.',
  'You can’t leave.'
];

document.getElementById('monsterDoor').addEventListener('click', () => {
  triggerJumpscare();
});

function triggerJumpscare() {
  const container = document.getElementById('jumpScareDoor');

  // Create the scare image
  const img = document.createElement('img');
  img.src = '../assets/jumpscare.gif'; // Replace with your jumpscare image path
  img.id = 'jumpscareImage';
  container.appendChild(img);

  // Play sound
  const scream = document.getElementById('screamSound');
  scream.currentTime = 0;
  scream.play();

  // Add screen shake
  document.body.classList.add('shake');

  // Remove after a short time (like 1.5 seconds)
  setTimeout(() => {
    container.removeChild(img);
    document.body.classList.remove('shake');
  }, 1500);
}


document.getElementById('justAnotherDoor').addEventListener('click', () => {
  const message = scaryMessages[Math.floor(Math.random() * scaryMessages.length)];
  alert(message);
});
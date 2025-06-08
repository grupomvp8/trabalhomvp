const textElement = document.getElementById("breathingText");
const circle = document.getElementById("breathingCircle");

let inspire = true;
let count = 1;
let countDirection = 1;
const maxCount = 5;

function updateBreathing() {
  if (inspire) {
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.textContent = "Inspire...";
      textElement.style.opacity = 1;
      circle.style.transform = "scale(1.5)";
    }, 400);
  } else {
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.textContent = "Expire...";
      textElement.style.opacity = 1;
      circle.style.transform = "scale(1)";
    }, 400);
  }
  inspire = !inspire;
  countDirection = inspire ? 1 : -1;
  count = inspire ? 1 : maxCount;
}

function updateCounter() {
  circle.textContent = count;
  count += countDirection;
  if (count > maxCount) count = maxCount;
  if (count < 1) count = 1;
}

updateBreathing();
updateCounter();

setInterval(updateCounter, 800); 
setInterval(updateBreathing, 4000);

function toggleSound(id) {
  const audio = document.getElementById(id);
  if (audio.paused) {
    audio.volume = 0.5;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

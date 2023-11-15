let popped = 0;
const headingElement = document.querySelector("h1");
const message = document.querySelector("#yay-no-balloons");
const gallery = document.querySelector("#balloon-gallery");

function playSound(sound) {
  const audio = new Audio(sound);

  audio.addEventListener("canplaythrough", function () {
    audio.play();
  });

  audio.addEventListener("error", function () {
    alert("Can't Play Audio");
  });

  // Start preloading the audio
  audio.load();
}


function removeEvent(e) {
  e.target.removeEventListener("mouseover", popBallons);
}

function checkAllPopped() {
  if (popped === 24) {
    message.style.display = "block";
    headingElement.style.display = "none";
    gallery.innerHTML = " ";
  }
}

function popBallons(e) {
  if (e.target.classList.contains("balloon")) {
    e.target.style.backgroundColor = "#ededed";

    e.target.textContent = "POP!";
    playSound("pop-sound.mp3");

    popped++;

    removeEvent(e);
    checkAllPopped();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if ("ontouchstart" in window) {
    headingElement.textContent =
      "POP THE BALLOONS BY MOVING OR CLICKING ON THEM";
    document.addEventListener("click", popBallons);
  } else {
    document.addEventListener("mouseover", popBallons);
  }
});

/* Script to the drum js30 1st challenge */

function playSound(dKeyboardEvent) {
  const dAudio = document.querySelector(
    `audio[data-key="${dKeyboardEvent.keyCode}"]`
  );
  if (!dAudio) return;

  /* add an effect border */

  const dKey = document.querySelector(
    `div[data-key="${dKeyboardEvent.keyCode}"]`
  );
  dKey.classList.add("playing");

  function borderRemover() {
    dKey.classList.remove("playing");
  }

  setTimeout(borderRemover, 150);

  /* rewinds and plays audio */
  dAudio.currentTime = 0;
  dAudio.play();
}

window.addEventListener("keydown", playSound);

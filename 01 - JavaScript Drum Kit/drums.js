/* Script to the drum js30 1st challenge */
window.addEventListener("keydown", playSound);

function playSound(dKeyboardEvent) {
  const dAudio = document.querySelector(
    `audio[data-key="${dKeyboardEvent.keyCode}"]`
  );
  if (!dAudio) return;

  dAudio.currentTime = 0;
  dAudio.play();
}

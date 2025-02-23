let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function updateDisplay() {
  let time = elapsedTime;
  let centiseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  document.getElementById("display").innerText =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(centiseconds).padStart(2, "0");
}

function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    running = true;
  }
}

function pauseTimer() {
  if (running) {
    clearInterval(timer);
    running = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  running = false;
  updateDisplay();
}

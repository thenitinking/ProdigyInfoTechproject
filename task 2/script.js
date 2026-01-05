let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

function startTimer() {
    if (timerInterval) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    elapsedTime = 0;
    display.textContent = "00 : 00 : 00 : 00";
    laps.innerHTML = "";
}

function recordLap() {
    if (!timerInterval) return;
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    display.textContent =
        `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} : ${pad(milliseconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, "0");
}
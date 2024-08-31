// const horasE1 = document.querySelector("#horas");
// const minutosE1 = document.querySelector("#minutos");
// const segundosE1 = document.querySelector("#segundos");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resumeBtn = document.querySelector("#resumeBtn");
// const resetBtn = document.querySelector("#resetBtn");

const horasE1 = document.getElementById("horas");
const minutosE1 = document.getElementById("minutos");
const segundosE1 = document.getElementById("segundos");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetBtn = document.getElementById("resetBtn");

let interval;
let horas = 0;
let minutos = 0;
let segundos = 0;
let isPaused = false;

function startTime() {
    console.log("executou")
    if (interval) return; // Impede múltiplos intervalos

    isPaused = false;
    startBtn.style.display = "none"; // Esconde o botão de início após clicar
    pauseBtn.style.display = "inline-block"; // Mostra o botão de pausa

    interval = setInterval(() => {
        if (!isPaused) {
            segundos++;

            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            if (minutos === 60) {
                horas++;
                minutos = 0;
            }
            console.log("horas", horas)
            console.log("horas", minutos)
            console.log("horas", segundos)
            horasE1.textContent = formatTime(horas);
            minutosE1.textContent = formatTime(minutos);
            segundosE1.textContent = formatTime(segundos);
        }
    }, 1000); // Intervalo de 1 segundo
}

function pauseTime() {
    isPaused = true;
    pauseBtn.style.display = "none"; // Esconde o botão de pausa
    resumeBtn.style.display = "inline-block"; // Mostra o botão de continuar
}

function resumeTime() {
    isPaused = false;
    resumeBtn.style.display = "none"; // Esconde o botão de continuar
    pauseBtn.style.display = "inline-block"; // Mostra o botão de pausa
}

function resetTime() {
    clearInterval(interval); // Limpa o intervalo
    interval = null; // Reseta a variável de intervalo
    horas = 0;
    minutos = 0;
    segundos = 0;
    isPaused = false;

    horasE1.textContent = "00";
    minutosE1.textContent = "00";
    segundosE1.textContent = "00";

    startBtn.style.display = "inline-block"; // Mostra o botão de início
    pauseBtn.style.display = "none"; // Esconde o botão de pausa
    resumeBtn.style.display = "none"; // Esconde o botão de continuar
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


startBtn.addEventListener("click", startTime);
pauseBtn.addEventListener("click", pauseTime);
resumeBtn.addEventListener("click", resumeTime);
resetBtn.addEventListener("click", resetTime);
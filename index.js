let watch;
let minutes = 0
let seconds = 0
let isPaused = false

function startWatch() {
    const watch = setInterval(updateWatch, 1000)
}

function updateWatch() {
    const watchElement = document.getElementById('time')
    watchElement.textContent = formatTime(minutes, seconds)

    if (seconds === 0 && !isPaused ) {
        seconds++
    }  else if (!isPaused) {
        if (seconds < 59) {
            seconds++
        } else {
            seconds = 0
            minutes++
            
        }
    }
}

function formatTime(minutes, seconds) { 
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; 
} 

function startStop() {
    const startStopButton = document.querySelector('.btns button')
    isPaused = !isPaused

    if (isPaused) {
        clearInterval(watch)
        startStopButton.textContent = 'Start'
    } else {
        startWatch()
        startStopButton.textContent = 'Stop'
    }
}

function restartWatch() {
    minutes = 0
    seconds = 0
    isPaused = true
    const watchElement = document.getElementById('time')
    watchElement.textContent = formatTime(minutes, seconds)
    clearInterval(watch)
    const startStopButton = document.querySelector('.btns button')
    startStopButton.textContent = 'Start'
}

function lapWatch() {
    const laps = document.getElementById('laps')

    if (minutes === 0 && seconds === 0) {
        alert('Start timer to record lap.')
    } else {
        laps.innerHTML += "<li>" + minutes + ":" + seconds + "</li>"
    }
}

function clearLap() {
    const laps = document.getElementById('laps')
    laps.innerHTML = ""
}
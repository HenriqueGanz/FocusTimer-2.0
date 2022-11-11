export function Timer ({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonAddFiveMin,
    buttonRemoveFiveMin,
}) {

    let seconds 
    let minutes
    let timerTimeOut
    
    function updateDisplay (minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function countdown () {
        timerTimeOut = setTimeout(function () {
            seconds = Number(secondsDisplay.textContent)
            minutes = Number(minutesDisplay.textContent)
    
            updateDisplay(minutes, 0)
    
            if (minutes <= 0 && seconds <= 0) {
                buttonPlay.classList.remove("hide")
                buttonAddFiveMin.classList.remove("hide")
                buttonRemoveFiveMin.classList.remove("hide")
                timeOut()
                updateDisplay(25, 0)
                return
            }
    
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, String(seconds -1))
    
            countdown()
    
        }, 1000)
    }
    
    function reset () {
        clearTimeout(timerTimeOut)
        updateDisplay(String(25), 0)
    }

    return {
        updateDisplay,
        countdown,
        reset,
    }
}

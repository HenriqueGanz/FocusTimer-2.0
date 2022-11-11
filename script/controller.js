import {
    buttonPlay,
    buttonAddFiveMin,
    buttonRemoveFiveMin,
    minutesDisplay,
    secondsDisplay,
} from "/script/elements.js"

import {Timer} from "/script/timer.js"

import {Sounds} from "/script/sounds.js"

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonAddFiveMin,
    buttonRemoveFiveMin,
})

export function Controller() {

    function playTimer() {
        timer.countdown()
        buttonPlay.classList.add("hide")
        buttonAddFiveMin.classList.add("hide")
        buttonRemoveFiveMin.classList.add("hide")
        sounds.pressButton()
    }
        
    function stopTimer() {
        timer.reset()
        buttonPlay.classList.remove("hide")
        buttonAddFiveMin.classList.remove("hide")
        buttonRemoveFiveMin.classList.remove("hide")
        sounds.pressButton()
        return
    }
        
    function addTime() {
        timer.minutes = Number(minutesDisplay.textContent)
        if (timer.minutes >= 60) {
            return
        }
        minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
        sounds.pressButton()
    }
        
    function removeTime() {
        timer.minutes = Number(minutesDisplay.textContent)
            
        if (timer.minutes <= 10) {
            timer.updateDisplay(String(timer.minutes), 0)
           return
        }
        minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
        sounds.pressButton()
    }

    return {
        playTimer,
        stopTimer,
        addTime,
        removeTime,
    }
}



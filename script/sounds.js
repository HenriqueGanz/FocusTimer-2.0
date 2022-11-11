import {
    volCampfire,
    volCoffebar,
    volForest,
    volRain,
} from "/script/inputs.js"

export function Sounds () {

    const forestSound = new Audio("./components/forest.wav")
    const campfireSound = new Audio("./components/campfire.wav")
    const rainSound = new Audio("./components/rain.wav")
    const coffeSound = new Audio("./components/coffe.wav")
    const buttonPressAudio = new Audio("./components/minecraftbutton.mp3")
    const endTime = new Audio("./components/alarm.mp3")
    
    forestSound.loop = true
    campfireSound.loop = true
    rainSound.loop = true
    coffeSound.loop = true
    
    function pressButton() {
        buttonPressAudio.play()
    }
    
    
    function timeOut () {
        endTime.play()
    }
    
    function setAudioVolume() {
        forestSound.volume = volForest.value
        campfireSound.volume = volCampfire.value
        coffeSound.volume = volCoffebar.value
        rainSound.volume = volRain.value
    }
    
    return {
        pressButton,
        timeOut,
        setAudioVolume,
        rainSound,
        coffeSound,
        forestSound,
        campfireSound,
    }
}


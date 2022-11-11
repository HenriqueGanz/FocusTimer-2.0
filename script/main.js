
import {
    buttonPlay,
    buttonStop,
    buttonAddFiveMin,
    buttonRemoveFiveMin,
    bgGreen,
    bgBlue,
    bgPurple,
    bgOrange,
    pageDisplay,
    timerDisplay,
    lightMode,
    darkMode,
    cleanMode,
    body,
  } from "/script/elements.js"

import {
    volCampfire,
    volCoffebar,
    volForest,
    volRain,
} from "/script/inputs.js"

import {Sounds} from "/script/sounds.js"

import { Controller } from "/script/controller.js";

//exportados
const sounds = Sounds()
const controller = Controller()

//funcoes
function toggle(event) {
    if (
    timerDisplay.classList.contains("darkModeTimerConfig"),
    darkMode.classList.contains("hide")&&
    lightMode.classList.contains("hide")&&

    bgBlue.classList.contains('hide')&&
    bgGreen.classList.contains('hide')&&
    bgOrange.classList.contains('hide')&&
    bgPurple.classList.contains('hide')) {

        timerDisplay.classList.remove("darkModeTimerConfig")
        darkMode.classList.remove("hide")
    
        bgBlue.classList.remove('hide')
        bgGreen.classList.remove('hide')
        bgOrange.classList.remove('hide')
        bgPurple.classList.remove('hide')
    }else {
        timerDisplay.classList.add("darkModeTimerConfig")
        darkMode.classList.add("hide")
        lightMode.classList.add("hide")
    
        bgBlue.classList.add('hide')
        bgGreen.classList.add('hide')
        bgOrange.classList.add('hide')
        bgPurple.classList.add('hide')
    }
}
function interruptor() {
    pageDisplay.classList.remove("greenBg")
    pageDisplay.classList.remove("purpleBg")
    pageDisplay.classList.remove("blueBg")
    pageDisplay.classList.remove("orangeBg")

    volForest.classList.add("hide")
    volRain.classList.add("hide")
    volCoffebar.classList.add("hide")
    volCampfire.classList.add("hide")

    sounds.pressButton()
    sounds.rainSound.pause()
    sounds.forestSound.pause()
    sounds.campfireSound.pause()
    sounds.coffeSound.pause()
}

//eventos iniciais
volForest.addEventListener('input', sounds.setAudioVolume)
volRain.addEventListener('input', sounds.setAudioVolume)
volCoffebar.addEventListener('input', sounds.setAudioVolume)
volCampfire.addEventListener('input', sounds.setAudioVolume)

volForest.classList.add("hide")
volRain.classList.add("hide")
volCoffebar.classList.add("hide")
volCampfire.classList.add("hide")

//eventos dos botoes
buttonPlay.addEventListener('click', function(){
    controller.playTimer()
})

buttonStop.addEventListener('click', function() {
    controller.stopTimer()
})

buttonAddFiveMin.addEventListener('click', function() {
    controller.addTime()
})

buttonRemoveFiveMin.addEventListener('click', function() {
    controller.removeTime()
})

cleanMode.addEventListener('click', toggle, false)

//eventos dos cards
lightMode.addEventListener('click', function(){
    interruptor()
    lightMode.classList.add("hide")
    
    cleanMode.classList.remove('hide')
    timerDisplay.classList.remove("darkModeTimerConfig")
    body.classList.remove("darkMode")
    darkMode.classList.remove("hide")
    bgBlue.classList.remove('hide')
    bgGreen.classList.remove('hide')
    bgOrange.classList.remove('hide')
    bgPurple.classList.remove('hide')
})

darkMode.addEventListener('click', function (){
    interruptor()
    lightMode.classList.remove("hide")

    timerDisplay.classList.add("darkModeTimerConfig")
    body.classList.add("darkMode")
    darkMode.classList.add("hide")
    cleanMode.classList.add('hide')
    bgBlue.classList.add('hide')
    bgGreen.classList.add('hide')
    bgOrange.classList.add('hide')
    bgPurple.classList.add('hide')
})

bgGreen.addEventListener('click', function(){
    pageDisplay.classList.add("greenBg")
    pageDisplay.classList.remove("purpleBg")
    pageDisplay.classList.remove("blueBg")
    pageDisplay.classList.remove("orangeBg")

    volForest.classList.remove("hide")
    volRain.classList.add("hide")
    volCoffebar.classList.add("hide")
    volCampfire.classList.add("hide")

    sounds.pressButton()
    sounds.rainSound.pause()
    sounds.forestSound.play()
    sounds.campfireSound.pause()
    sounds.coffeSound.pause()
})

bgBlue.addEventListener('click', function(){
    pageDisplay.classList.add("blueBg")
    pageDisplay.classList.remove("purpleBg")
    pageDisplay.classList.remove("greenBg")
    pageDisplay.classList.remove("orangeBg")

    volForest.classList.add("hide")
    volRain.classList.remove("hide")
    volCoffebar.classList.add("hide")
    volCampfire.classList.add("hide")

    sounds.pressButton()
    sounds.coffeSound.pause()
    sounds.campfireSound.pause()
    sounds.forestSound.pause()
    sounds.rainSound.play()

})

bgPurple.addEventListener('click', function(){
    pageDisplay.classList.add("orangeBg")
    pageDisplay.classList.remove("blueBg")
    pageDisplay.classList.remove("purpleBg")
    pageDisplay.classList.remove("greenBg")

    volForest.classList.add("hide")
    volRain.classList.add("hide")
    volCoffebar.classList.remove("hide")
    volCampfire.classList.add("hide")

    sounds.pressButton()
    sounds.rainSound.pause()
    sounds.forestSound.pause()
    sounds.campfireSound.pause()
    sounds.coffeSound.play()
})

bgOrange.addEventListener('click', function(){
    pageDisplay.classList.add("purpleBg")
    pageDisplay.classList.remove("orangeBg")
    pageDisplay.classList.remove("greenBg")
    pageDisplay.classList.remove("blueBg")

    volForest.classList.add("hide")
    volRain.classList.add("hide")
    volCoffebar.classList.add("hide")
    volCampfire.classList.remove("hide")

    sounds.pressButton()
    sounds.rainSound.pause()
    sounds.coffeSound.pause()
    sounds.forestSound.pause()
    sounds.campfireSound.play()
})



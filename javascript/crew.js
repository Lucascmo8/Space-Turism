let douglasImg = document.getElementById("douglasImg")
let markImg = document.getElementById("markImg")
let victorImg = document.getElementById("victorImg")
let anoushehImg = document.getElementById("anoushehImg")

let douglasBtn = document.getElementById("douglasBtn")
let markBtn = document.getElementById("markBtn")
let victorBtn = document.getElementById("victorBtn")
let anoushehBtn = document.getElementById("anoushehBtn")

let douglasS = document.getElementById("douglasSection")
let markS = document.getElementById("markSection")
let victorS = document.getElementById("victorSection")
let anoushehS = document.getElementById("anoushehSection")

function cleanc(){
    douglasImg.classList.remove("active")
    markImg.classList.remove("active")
    victorImg.classList.remove("active")
    anoushehImg.classList.remove("active")

    douglasBtn.classList.remove("active")
    markBtn.classList.remove("active")
    victorBtn.classList.remove("active")
    anoushehBtn.classList.remove("active")

    douglasS.classList.remove("active")
    markS.classList.remove("active")
    victorS.classList.remove("active")
    anoushehS.classList.remove("active")
}

function btnMark(){
    cleanc()
    markImg.classList.add("active")
    markBtn.classList.add("active")
    markS.classList.add("active")
}

function btnVictor(){
    cleanc()
    victorImg.classList.add("active")
    victorBtn.classList.add("active")
    victorS.classList.add("active")
}

function btnAnousheh(){
    cleanc()
    anoushehImg.classList.add("active")
    anoushehBtn.classList.add("active")
    anoushehS.classList.add("active")
}

function btnDouglas(){
    cleanc()
    douglasImg.classList.add("active")
    douglasBtn.classList.add("active")
    douglasS.classList.add("active")
}
"use strict"
let keys = document.querySelectorAll('.keys');
let shift_right = document.querySelector('.ShiftRight')
let shift_left = document.querySelector('.ShiftLeft')
let random = () => {
    return Math.floor(Math.random() * keys.length)
}
let keyRandom = keys[random()].classList
keys.forEach(elem => {
    elem.setAttribute('keyname', elem.innerText)
    elem.setAttribute('lowerCaseName', elem.innerText.toLowerCase())
    elem.setAttribute('upperCaseName', elem.innerText.toUpperCase());
})
keyRandom.add("active")
window.addEventListener('keydown', (e) => {
    keys.forEach(elem => {
        if (e.code === elem.getAttribute('keyname') || e.key === elem.getAttribute('lowerCaseName') || e.key === elem.getAttribute('upperCaseName')) {
            elem.classList.remove('active')
            elem.classList.add('remove')
        }
        if (e.code === 'ShiftLeft') {
            shift_left.classList.remove('active')
            shift_left.classList.add('remove')
        }
        if (e.code === 'ShiftRight') {
            shift_right.classList.remove('active')
            shift_right.classList.add('remove')
        }
        setTimeout(() => {
            elem.classList.remove('remove')
        }, 200)
    })
    if (e.code === keyRandom[1]) {
        keyRandom = keys[random()].classList
        let a = keyRandom
        a.add("active")
    }
});

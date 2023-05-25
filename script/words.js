const words = [
    'miau',
    'evil',
    'slay',
    'uwu',
    'whimsical',
    'swag',
    'cute',
    'silly',
]

let wordIndex = Math.floor(Math.random() * words.length)

document.addEventListener('DOMContentLoaded', changeWord)

const wordEl = document.querySelector('.word')
wordEl.addEventListener('click', changeWord)

function changeWord() {
    wordEl.textContent = words[wordIndex]
    wordIndex = (wordIndex + 1) % words.length
}

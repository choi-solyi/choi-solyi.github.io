const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
]

const ways = ['to top', 'to bottom', 'to left', 'to right']

const btn = document.querySelector('button')

// btn.addEventListener('click', handleBackgroundColor)

setInterval(() => {
  handleBackgroundColor()
}, 5000)

function handleBackgroundColor() {
  const colorLength = colors.length
  const randomWay = Math.floor(Math.random() * ways.length)
  const randomA = Math.floor(Math.random() * colorLength)
  const randomB = Math.floor(Math.random() * colorLength)

  document.body.style.backgroundImage = `linear-gradient(${ways[randomWay]},${colors[randomA]}, ${colors[randomB]})`
}

const loginForm = document.getElementById('login-form')
const loginInput = loginForm.querySelector('input')
const loginBtn = document.getElementById('loginBtn')
const greeting = document.querySelector('#greeting')
const USER_NAME = 'USER_NAME'
const HIDDEN_CLASS = 'hidden'
const savedUsername = localStorage.getItem(USER_NAME)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS)
  loginForm.addEventListener('submit', setUsername)
  // greeting.classList.add(HIDDEN_CLASS)
} else {
  paintGreeting(savedUsername)
  greeting.classList.remove(HIDDEN_CLASS)
  greeting.innerText = `Hello ${savedUsername}`
}
function setUsername(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASS)
  const username = loginInput.value
  localStorage.setItem(USER_NAME, username)
  paintGreeting(username)
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASS)
}
